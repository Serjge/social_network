import {AppStateType} from "store/store";
import { ProfileType } from 'type';


export const getProfile = (state: AppStateType): ProfileType => {
    return state.profilePage.profile
}
export const getStatus = (state: AppStateType): string => {
    return state.profilePage.status
}
