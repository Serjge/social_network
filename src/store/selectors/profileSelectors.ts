import {AppStateType} from "store/store";
import {ProfileType} from "store/reducers/ProfileReducer";

export const getProfile = (state: AppStateType): ProfileType => {
    return state.profilePage.profile
}
export const getStatus = (state: AppStateType): string => {
    return state.profilePage.status
}
