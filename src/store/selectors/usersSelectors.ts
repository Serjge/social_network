import { AppStateType } from 'store/store';
import { UserType } from 'type';

export const getUsers = (state: AppStateType): UserType[] => state.usersPage.users;
export const getPageSize = (state: AppStateType): number => state.usersPage.pageSize;
export const getTotalUserCount = (state: AppStateType): number =>
  state.usersPage.totalUserCount;
export const getCurrentPage = (state: AppStateType): number =>
  state.usersPage.currentPage;
export const getUsersIsFetching = (state: AppStateType): boolean =>
  state.usersPage.isFetching;
export const getFollowingInProgress = (state: AppStateType): number[] =>
  state.usersPage.followingInProgress;
