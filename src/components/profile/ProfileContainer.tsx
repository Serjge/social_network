import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { mapStateToPropsType, ProfileAPIContainer } from './ProfileAPIContainer';

import { withAuthRedirect, withRouter } from 'hoc';
import { AppStateType } from 'store';
import { addLike, addPost, removePost } from 'store/actions';
import { getUserId, getProfile, getStatus } from 'store/selectors';
import { requestProfile, requestStatus, updateStatus } from 'store/thunks';

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  profile: getProfile(state),
  status: getStatus(state),
  authUserId: getUserId(state),
});

export const ProfileContainer = compose<ComponentType>(
  connect(mapStateToProps, {
    addPost,
    removePost,
    addLike,
    requestProfile,
    requestStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect,
)(ProfileAPIContainer);
