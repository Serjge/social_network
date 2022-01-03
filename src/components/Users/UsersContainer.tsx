import {
    FollowAC,
    InitialUsersStateType,
    setCurrentPageAC, setTotalUserCountAC,
    setUsersAC,
    UnFollowAC,
    UserType
} from "../../Redux/UsersReducer";
import {connect} from "react-redux";

import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";
import React from "react";
import axios from "axios";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: InitialUsersStateType
    pageSize: number,
}

type mapDispatchToPropsType = {
    follow: (id: string) => void
    unFollow: (id: string) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUserCount: (totalUserCount: number) => void
}

export type UsersAPIComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUserCount(response.data.totalCount)
            console.log(response)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            console.log(response)
        })
    }

    render() {

        return (<Users
                usersPage={this.props.usersPage}
                onPageChanged={this.onPageChanged}
                unFollow={this.props.unFollow}
                follow={this.props.follow}/>

        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id: string) => {
            dispatch(FollowAC(id))
        },
        unFollow: (id: string) => {
            dispatch(UnFollowAC(id))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        } ,
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUserCount: (totalUserCount: number) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

