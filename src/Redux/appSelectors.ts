import {AppStateType} from "./redux_store";

export const getInitialized = (state: AppStateType): boolean => {
    return state.app.initialized
}