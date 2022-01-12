type initialStateType = {
    data: dataType
    isFetching: boolean
    auth: boolean
}
type dataType = {
    usersId: string,
    email: string,
    login: string
}

const initialState = {
    data: {} as dataType,
    isFetching: true,
    auth: false
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
                data: {...state.data,
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
                auth: action.auth
            }
        default:
            return state
    }
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
export const setToggleIsAuth = (auth: boolean) => {
    return {
        type: 'TOGGLE-IS-AUTH',
        auth: auth
    } as const
}
