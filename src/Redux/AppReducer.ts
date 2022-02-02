import {getAuthUserData} from "./AuthReducer";
import {AppThunkType} from "./redux_store";

type initialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export type ActionsAppType =
    ReturnType<typeof initializedSuccess>

export const AppReducer = (state: initialStateType = initialState, action: ActionsAppType): initialStateType => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

export const initializedApp = (): AppThunkType => (dispatch) => {
    const promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess())
    })
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

