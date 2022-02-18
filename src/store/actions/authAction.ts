import { Dispatch } from 'redux';

import { authApi } from 'api';
import { resultCode } from 'enum';
import { ActionAllType } from 'store/actions/type';

export type ActionsAuthType =
  | ReturnType<typeof setUserAuth>
  | ReturnType<typeof setToggleIsFetching>
  | ReturnType<typeof setToggleIsAuth>;

export const setToggleIsAuth = (isAuth: boolean) =>
  ({
    type: 'TOGGLE-IS-AUTH',
    isAuth,
  } as const);

export const logout = () => (dispatch: Dispatch<ActionAllType>) => {
  authApi.logoutMe().then(response => {
    if (response.resultCode === resultCode.success) {
      dispatch(setToggleIsAuth(false));
    }
  });
};

export const setUserAuth = (usersId: string, email: string, login: string) =>
  ({
    type: 'SET-USERS-DATA',
    data: { usersId, email, login },
  } as const);

export const setToggleIsFetching = (isFetching: boolean) =>
  ({
    type: 'TOGGLE-IS-FETCHING',
    isFetching,
  } as const);
