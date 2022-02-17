import {AppStateType} from "store/store";

export const getInitialized = (state: AppStateType): boolean => {
    return state.app.initialized
}