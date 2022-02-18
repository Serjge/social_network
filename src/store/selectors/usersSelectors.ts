import {AppStateType} from "store/store";
import { UserType } from "type";


export const getUsers = (state: AppStateType): UserType[] => {
    return state.usersPage.users
}
export const getPageSize = (state: AppStateType):number  => {
    return state.usersPage.pageSize
}
export const getTotalUserCount = (state: AppStateType):number  => {
    return state.usersPage.totalUserCount
}
export const getCurrentPage = (state: AppStateType):number  => {
    return state.usersPage.currentPage
}
export const getUsersIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStateType): number []=> {
    return state.usersPage.followingInProgress
}
