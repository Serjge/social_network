import {getAuthUserData} from "./AuthReducer";

type initialStateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

type ActionsUsersType =
    ReturnType<typeof initializedSuccess>


export const AppReducer = (state: initialStateType = initialState, action: ActionsUsersType): initialStateType => {
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

export const initializedApp = () => (dispatch: any) => {

    const promise = dispatch(getAuthUserData())
    console.log(promise)
    promise.then(() => {
        console.log('init')
        dispatch(initializedSuccess())
    })
}

export const initializedSuccess = () => {
    return {
        type: 'INITIALIZED_SUCCESS',
    } as const
}

