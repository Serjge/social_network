import {AppStateType} from "./redux_store";
import {ProfileType} from "./ProfileReducer";

export const getProfile = (state: AppStateType): ProfileType => {
    return state.profilePage.profile
}
export const getStatus = (state: AppStateType): string => {
    return state.profilePage.status
}
