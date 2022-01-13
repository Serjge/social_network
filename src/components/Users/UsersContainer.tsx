import {
    setCurrentPage,
    setFollow,
    setToggleIsFetching,
    setTotalUserCount,
    setUnFollow,
    setUsers,
    toggleFollowingInProgress,
    UserType
} from "../../Redux/UsersReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../Redux/redux_store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";

type mapStateToPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number []
}

type mapDispatchToPropsType = {
    setFollow: (id: string) => void
    setUnFollow: (id: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress: (isFollow: boolean, userId: number) => void
}

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(1, this.props.pageSize).then(response => {
            debugger
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUserCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items)
        })
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
    setFollow,
    setUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setToggleIsFetching,
    toggleFollowingInProgress,
})(UsersAPIComponent)

