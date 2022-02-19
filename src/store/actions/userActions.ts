import { setToggleIsFetching } from 'store/actions';
import { UserType } from 'type';

export type ActionsUsersType =
  | ReturnType<typeof setFollow>
  | ReturnType<typeof setUnFollow>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUserCount>
  | ReturnType<typeof toggleFollowingInProgress>
  | ReturnType<typeof setToggleIsFetching>;

export const setFollow = (id: string) =>
  ({
    type: 'SET-FOLLOW',
    id,
  } as const);
export const setUnFollow = (id: string) =>
  ({
    type: 'SET-UNFOLLOW',
    id,
  } as const);

export const setUsers = (users: UserType[]) =>
  ({
    type: 'SET-USERS',
    users,
  } as const);
export const setCurrentPage = (currentPage: number) =>
  ({
    type: 'SET-CURRENT-PAGE',
    currentPage,
  } as const);
export const setTotalUserCount = (totalUserCount: number) =>
  ({
    type: 'SET-TOTAL-USER-COUNT',
    totalUserCount,
  } as const);

export const toggleFollowingInProgress = (isFollow: boolean, userId: number) =>
  ({
    type: 'FOLLOWING-IN-PROGRESS',
    isFollow,
    userId,
  } as const);
