import {Dispatch} from "redux";
import {authApi} from "../api/authApi";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux_store";

type initialStateType = {
    data: dataType
    isFetching: boolean
    isAuth: boolean
}
type dataType = {
    userId: string,
    email: string,
    login: string
}

const initialState = {
    data: {} as dataType,
    isFetching: true,
    isAuth: false,
}

type ActionsUsersType =
    ReturnType<typeof setUserAuth>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setToggleIsAuth>

type ActionsType = InferActionsTypes<ActionsUsersType>

type ThunkType = BaseThunkType<ActionsType | FormAction>

export const AuthReducer = (state: initialStateType = initialState, action: ActionsUsersType): initialStateType => {
    switch (action.type) {
        case "SET-USERS-DATA":
            return {
                ...state,
                data: {
                    ...state.data,
                    email: action.data.email,
                    login: action.data.login,
                    userId: action.data.usersId
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
   return authApi.authMe()
        .then(response => {


            if (response.resultCode === 0) {
                // console.log(response)
                dispatch(setUserAuth(
                    response.data.id,
                    response.data.email,
                    response.data.login
                ))
                dispatch(setToggleIsAuth(true))
            }

        })


}
export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authApi.loginMe(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                authApi.authMe()
                    .then(response => {
                        if (response.resultCode === 0) {
                            dispatch(setUserAuth(
                                response.data.usersId,
                                response.data.email,
                                response.data.login
                            ))
                            dispatch(setToggleIsAuth(true))
                        }
                    })
            } else {
                dispatch(stopSubmit('login', {_error: response.messages[0]}))
            }
        })
}
export const logout = () => (dispatch: Dispatch) => {
    authApi.logoutMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setToggleIsAuth(false))
            }
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
