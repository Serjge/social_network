import { ProfileType } from 'type';

export type ActionsProfileType =
  | ReturnType<typeof addPost>
  | ReturnType<typeof removePost>
  | ReturnType<typeof addLike>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setUserStatus>;

export const addPost = (newText: string) =>
  ({
    type: 'ADD-POST',
    newText,
  } as const);

export const removePost = (removeId: string) =>
  ({
    type: 'REMOVE-POST',
    removeId,
  } as const);

export const addLike = (LikeId: string, isLike: boolean) =>
  ({
    type: 'ADD-LIKE',
    LikeId,
    isLike,
  } as const);

export const setUserProfile = (profile: ProfileType) =>
  ({
    type: 'SET-USER-PROFILE',
    profile,
  } as const);

export const setUserStatus = (status: any) =>
  ({
    type: 'SET-USER-STATUS',
    status,
  } as const);
