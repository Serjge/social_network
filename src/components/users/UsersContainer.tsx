// import {follow, requestUsers, toggleFollowingInProgress, unFollow, UserType} from "store/reducers/UsersReducer";
// import {connect} from "react-redux";
// import {AppStateType} from "store/store";
// import React from "react";
// import {Users} from "./Users";
// import { Preloader } from "components/common";
// import {compose} from "redux";
// import {withAuthRedirect} from "hoc";
// import {
//     getCurrentPage,
//     getFollowingInProgress,
//     getUsersIsFetching,
//     getPageSize,
//     getTotalUserCount,
//     getUsers
// } from "store/selectors/usersSelectors";
//
// type mapStateToPropsType = {
//     users: UserType[]
//     totalUserCount: number
//     pageSize: number
//     currentPage: number
//     isFetching: boolean
//     followingInProgress: number []
// }
//
// type mapDispatchToPropsType = {
//     toggleFollowingInProgress: (isFollow: boolean, userId: number) => void
//     requestUsers: (currentPage: number, pageSize: number) => void
//     follow: (id: string) => void
//     unFollow: (id: string) => void
// }
//
// export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType
//
// export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {
//
//     componentDidMount() {
//         this.props.requestUsers(1, this.props.pageSize)
//     }
//
//     onPageChanged = (pageNumber: number) => {
//         this.props.requestUsers(pageNumber, this.props.pageSize)
//     }
//
//     render() {
//
//         return (
//             <>{this.props.isFetching ? <Preloader/> : null}
//                 <Users {...this.props}
//                        onPageChanged={this.onPageChanged}
//                 />
//             </>
//         );
//     }
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         users: getUsers(state),
//         pageSize: getPageSize(state),
//         totalUserCount: getTotalUserCount(state),
//         currentPage: getCurrentPage(state),
//         isFetching: getUsersIsFetching(state),
//         followingInProgress: getFollowingInProgress(state)
//     }
// }
//
// export const UsersContainer = compose<React.ComponentType>(
//     connect(mapStateToProps, {
//         toggleFollowingInProgress,
//         requestUsers,
//         follow,
//         unFollow,
//     }),
//     withAuthRedirect
// )(UsersAPIComponent)
//

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
