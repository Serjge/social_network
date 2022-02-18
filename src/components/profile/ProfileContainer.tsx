// import { Profile } from "./Profile";
// import { AppStateType } from "store/store";
// import { connect } from "react-redux";
// import {
//   addLike,
//   addPost,
//   requestProfile,
//   requestStatus,
//   ProfileType,
//   removePost,
//   updateStatus
// } from "store/reducers/ProfileReducer";
// import { compose } from "redux";
// import { InjectedProps, withRouter, withAuthRedirect } from "hoc";
// import { getUserId } from "store/selectors/authSelectors";
// import { getProfile, getStatus } from 'store/selectors/profileSelectors';
// import { Component, ComponentType } from "react";
//
// type mapStateToPropsType = {
//   profile: ProfileType
//   status: string
//   authUserId: string
// }
//
// type mapDispatchToPropsType = {
//   addPost: (newText: string) => void
//   RemovePost: (removeId: string) => void
//   AddLike: (LikeId: string, isLike: boolean) => void
//   requestProfile: (userId: string) => void
//   requestStatus: (userId: string) => void
//   updateStatus: (userId: string) => void
// }
//
// export type ProfileAPIContainerPropsType =
//   mapStateToPropsType
//   & mapDispatchToPropsType
//   & InjectedProps
//
// class ProfileAPIContainer extends Component<ProfileAPIContainerPropsType> {
//
//   componentDidMount() {
//
//     let userId: string = this.props.userId
//
//     if (!userId) {
//       userId = this.props.authUserId;
//     }
//     this.props.requestProfile(userId)
//     this.props.requestStatus(userId)
//   }
//
//   render() {
//     return (
//       <Profile profile={ this.props.profile } status={ this.props.status }
//                updateStatus={ this.props.updateStatus }/>
//     )
//   }
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//   return {
//     profile: getProfile(state),
//     status: getStatus(state),
//     authUserId: getUserId(state)
//
//   }
// }
//
// export const ProfileContainer = compose<ComponentType>(
//   connect(mapStateToProps,
//     {
//       addPost,
//       removePost,
//       addLike,
//       requestProfile,
//       requestStatus,
//       updateStatus,
//     }),
//   withRouter,
//   withAuthRedirect
// )(ProfileAPIContainer)


import { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { addLike, addPost, removePost } from 'store/actions';

import { mapStateToPropsType, ProfileAPIContainer } from './ProfileAPIContainer';


import { withAuthRedirect, withRouter } from 'hoc';
import { AppStateType } from 'store';

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
