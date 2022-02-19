import { stopSubmit } from 'redux-form';

import { authApi } from 'api';
import { resultCode } from 'enum';
import { setToggleIsAuth, setUserAuth } from 'store/actions';
import { AppThunkType } from 'store/thunks/type';

export const getAuthUserData = (): AppThunkType<Promise<void>> => dispatch =>
  authApi.authMe().then(response => {
    if (response.resultCode === resultCode.success) {
      dispatch(setUserAuth(response.data.id, response.data.email, response.data.login));
      dispatch(setToggleIsAuth(true));
    }
  });

const zeroElement = 0;

export const login =
  (email: string, password: string, rememberMe: boolean): AppThunkType =>
  dispatch => {
    authApi.loginMe(email, password, rememberMe).then(response => {
      if (response.resultCode === resultCode.success) {
        dispatch(getAuthUserData());
      } else {
        dispatch(stopSubmit('login', { _error: response.messages[zeroElement] }));
      }
    });
  };

export const logout = (): AppThunkType => dispatch => {
  authApi.logoutMe().then(response => {
    if (response.resultCode === resultCode.success) {
      dispatch(setToggleIsAuth(false));
    }
  });
};
