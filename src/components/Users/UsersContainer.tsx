import {
    setCurrentPage,
    setFollow,
    setToggleIsFetching,
    setTotalUserCount,
    setUnFollow,
    setUsers,
    UserType
} from "../../Redux/UsersReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../Redux/redux_store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import { usersAPI} from "../../api/api";

type mapStateToPropsType = {
    users: UserType[]
    totalUserCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    setFollow: (id: string) => void
    setUnFollow: (id: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
    setToggleIsFetching: (isFetching: boolean) => void
}

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersAPI.getUsers(1,10).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setTotalUserCount(response.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, 10).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.items)
        })
    }

    render() {

        return (
            <>{this.props.isFetching? <Preloader/>: null}

            <Users
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unFollow={this.props.setUnFollow}
                follow={this.props.setFollow}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                totalUserCount={this.props.totalUserCount}

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
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    setFollow,
    setUnFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setToggleIsFetching,

})(UsersAPIComponent)

