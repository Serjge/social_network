import { profileAPI } from 'api';
import { resultCode } from 'enum';
import { savePhotoSuccess, setUserProfile, setUserStatus } from 'store/actions';
import { AppThunkType } from 'store/thunks';

export const requestProfile =
  (userId: string): AppThunkType =>
  dispatch => {
    profileAPI.authMe(userId).then(response => dispatch(setUserProfile(response)));
  };

export const requestStatus =
  (userId: string): AppThunkType =>
  dispatch => {
    profileAPI.getStatus(userId).then(response => dispatch(setUserStatus(response)));
  };

export const updateStatus =
  (status: string): AppThunkType =>
  dispatch => {
    profileAPI.updateStatusApi(status).then(response => {
      if (response.data.resultCode === resultCode.success) {
        dispatch(setUserStatus(status));
      }
    });
  };

export const savePhoto =
  (file: string | Blob): AppThunkType =>
  dispatch => {
    profileAPI.savePhoto(file).then(response => {
      if (response.data.resultCode === resultCode.success) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
    });
  };
