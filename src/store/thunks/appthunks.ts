import { initializedSuccess } from 'store/actions';
import { getAuthUserData, AppThunkType } from 'store/thunks';

export const initializedApp = (): AppThunkType => dispatch => {
  const promise = dispatch(getAuthUserData());
  promise.then(() => {
    dispatch(initializedSuccess());
  });
};
