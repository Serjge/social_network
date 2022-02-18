import { usersAPI } from 'api';
import { resultCode } from 'enum';
import {
  setCurrentPage,
  setFollow,
  setToggleIsFetching,
  setTotalUserCount,
  setUnFollow,
  setUsers,
  toggleFollowingInProgress,
} from 'store/actions';
import { AppThunkType } from 'store/thunks';

export const requestUsers =
  (currentPage: number, pageSize: number): AppThunkType =>
  dispatch => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize).then(response => {
      dispatch(setToggleIsFetching(false));
      dispatch(setUsers(response.items));
      dispatch(setTotalUserCount(response.totalCount));
    });
  };

export const follow =
  (userId: string): AppThunkType =>
  dispatch => {
    dispatch(toggleFollowingInProgress(true, +userId));
    usersAPI.follow(userId).then(response => {
      if (response.resultCode === resultCode.success) {
        dispatch(setFollow(userId));
        dispatch(toggleFollowingInProgress(false, +userId));
      }
    });
  };

export const unFollow =
  (userId: string): AppThunkType =>
  dispatch => {
    dispatch(toggleFollowingInProgress(true, +userId));
    usersAPI.unFollow(userId).then(response => {
      if (response.resultCode === resultCode.success) {
        dispatch(setUnFollow(userId));
        dispatch(toggleFollowingInProgress(false, +userId));
      }
    });
  };
