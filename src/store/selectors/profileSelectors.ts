import { AppStateType } from 'store/store';
import { ProfileType } from 'type';

export const getProfile = (state: AppStateType): ProfileType => state.profilePage.profile;
export const getStatus = (state: AppStateType): string => state.profilePage.status;
