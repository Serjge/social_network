import {Dispatch} from "redux";
import {authApi} from "../api/authApi";
import {stopSubmit} from "redux-form";
import {ActionAllType, AppStateType} from "./redux_store";
import {ThunkAction} from "redux-thunk";

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

export type ActionsAuthType =
    ReturnType<typeof setUserAuth>
    | ReturnType<typeof setToggleIsFetching>
    | ReturnType<typeof setToggleIsAuth>

export const AuthReducer = (state: initialStateType = initialState, action: ActionsAuthType): initialStateType => {
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

export const getAuthUserData = () => (dispatch: Dispatch<ActionAllType>) => {
   return authApi.authMe()
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserAuth(
                    response.data.id,
                    response.data.email,
                    response.data.login
                ))
                dispatch(setToggleIsAuth(true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, unknown, ActionAllType> => (dispatch) => {
    authApi.loginMe(email, password, rememberMe)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                dispatch(stopSubmit('login', {_error: response.messages[0]}))
            }
        })
}

export const logout = () => (dispatch: Dispatch<ActionAllType>) => {
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
