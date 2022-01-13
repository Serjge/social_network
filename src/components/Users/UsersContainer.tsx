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
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,{
            withCredentials: true,
            baseURL: 'https://social-network.samuraijs.com/api/1.0/',
            headers:     {
                "API-KEY": "6455f709-1e25-404c-a49d-c20b867901e8"
            }
        }).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(response.data.items)
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

