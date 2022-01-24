import {Dispatch} from "redux";
import {authApi} from "../api/authApi";

type initialStateType = {
    data: dataType
    isFetching: boolean
    isAuth: boolean
}
type dataType = {
    usersId: string,
    email: string,
    login: string
}

const initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false
}

type ActionsUsersType =
    ReturnType<typeof setUserAuth>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setToggleIsAuth>


export const AuthReducer = (state: initialStateType = initialState, action: ActionsUsersType): initialStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.data.email,
                    login: action.data.login,
                    usersId: action.data.usersId
                },

            }
        case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        case 'TOGGLE-IS-AUTH':
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state
    }
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    dispatch(setToggleIsFetching(true))
    authApi.authMe()
        .then(response => {
            dispatch(setToggleIsFetching(false))
            if (response.resultCode === 0) {
                dispatch(setUserAuth(
                    response.data.usersId,
                    response.data.email,
                    response.data.login
                ))
                dispatch(setToggleIsAuth(true))
            }
            dispatch(setToggleIsFetching(false))
        })
}

export const setUserAuth = (usersId: string, email: string, login: string) => {
    return {
        type: 'SET-USERS-DATA',
        data: {usersId, email, login}
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}
export const setToggleIsAuth = (isAuth: boolean) => {
    return {
        type: 'TOGGLE-IS-AUTH',
        isAuth: isAuth
    } as const
}
export const setLogin = (email: string,password: string,rememberMe= false) => {
    return {
        type: 'LOGIN-USER',
        email: email,
        password: password,
        rememberMe: rememberMe
    } as const
}
