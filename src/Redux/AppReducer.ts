import {getAuthUserData} from "./AuthReducer";
import {ThunkAction} from "redux-thunk";
import {ActionAllType, AppStateType} from "./redux_store";

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

export const initializedApp = (): ThunkAction<void, AppStateType, unknown, ActionAllType> => (dispatch) => {
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

