import { AppStateType } from 'store/store';

export const getLogin = (state: AppStateType): string => state.authPage.data.login;
export const getEmail = (state: AppStateType): string => state.authPage.data.email;
export const getUserId = (state: AppStateType): string => state.authPage.data.userId;
export const getAuthIsFetching = (state: AppStateType): boolean =>
  state.authPage.isFetching;
export const getIsAuth = (state: AppStateType): boolean => state.authPage.isAuth;
