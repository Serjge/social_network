import React from 'react';
import {FollowAC, InitialUsersStateType, UnFollowAC} from "../../Redux/UsersReducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../Redux/redux_store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    usersPage: InitialUsersStateType
}

type mapDispatchToPropsType = {
    follow: (id:string)=> void
    unFollow: (id:string)=> void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (id:string) => {
        dispatch(FollowAC(id))
        },
        unFollow: (id:string) => {
        dispatch(UnFollowAC(id))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)