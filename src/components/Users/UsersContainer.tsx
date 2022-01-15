import {follow, getUsers, toggleFollowingInProgress, unFollow, UserType} from "../../Redux/UsersReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../Redux/redux_store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

type mapStateToPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}

type mapDispatchToPropsType = {
    toggleFollowingInProgress: (isFollow: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (id: string) => void
    unFollow: (id: string) => void
}

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.getUsers(1, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return (
            <>{this.props.isFetching ? <Preloader/> : null}
                <Users {...this.props}
                       onPageChanged={this.onPageChanged}
                />
            </>
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    toggleFollowingInProgress,
    getUsers,
    follow,
    unFollow,
})(UsersAPIComponent)

