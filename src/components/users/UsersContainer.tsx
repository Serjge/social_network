import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { mapStateToPropsType, UsersAPIComponent } from './UsersAPIComponent';

import { withAuthRedirect } from 'hoc';
import { AppStateType } from 'store';
import { toggleFollowingInProgress } from 'store/actions';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getTotalUserCount,
  getUsers,
  getUsersIsFetching,
} from 'store/selectors';
import { follow, requestUsers, unFollow } from 'store/thunks';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUserCount: getTotalUserCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getUsersIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
});

export const UsersContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    toggleFollowingInProgress,
    requestUsers,
    follow,
    unFollow,
  }),
  withAuthRedirect,
)(UsersAPIComponent);

//
