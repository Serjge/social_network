import {AppStateType} from "./redux_store";

export const getLogin = (state: AppStateType): string => {
    return state.authPage.data.login
}
export const getEmail = (state: AppStateType): string => {
    return state.authPage.data.email
}
export const getUserId= (state: AppStateType): string => {
    return state.authPage.data.userId
}
export const getAuthIsFetching = (state: AppStateType): boolean => {
    return state.authPage.isFetching
}
export const getIsAuth = (state: AppStateType): boolean => {
    return state.authPage.isAuth
}
