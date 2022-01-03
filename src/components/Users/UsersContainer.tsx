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
import { UsersC } from "./UsersC";

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

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)