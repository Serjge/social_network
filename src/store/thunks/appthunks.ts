import { initializedSuccess } from 'store/actions';
import { getAuthUserData, AppThunkType } from 'store/thunks';

export const initializedApp = (): AppThunkType => async dispatch => {
  const promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};
