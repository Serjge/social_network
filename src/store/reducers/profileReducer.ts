import { v1 } from 'uuid';

import { ActionsProfileType } from 'store/actions';
import { PostsType, ProfileType } from 'type';

export type InitialProfileStateType = typeof initialState;

const initialState = {
  posts: [
    { id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false },
    { id: v1(), message: `It's my first post`, likeCount: 15, isLike: false },
    { id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false },
  ] as PostsType[],
  profile: {
    photos: {
      small: '',
      large: '',
    },
  } as ProfileType,
  status: '' as string,
};

const PLUS_ONE = 1;

export const ProfileReducer = (
  state = initialState,
  action: ActionsProfileType,
): InitialProfileStateType => {
  switch (action.type) {
    case 'ADD-POST':
      return {
        ...state,
        posts: [
          {
            id: v1(),
            message: action.newText.trim(),
            likeCount: 0,
            isLike: false,
          },
          ...state.posts,
        ],
      };
    case 'REMOVE-POST':
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.removeId),
      };
    case 'ADD-LIKE':
      return {
        ...state,
        posts: state.posts.map(p =>
          // eslint-disable-next-line no-nested-ternary
          p.id === action.LikeId
            ? !p.isLike
              ? { ...p, isLike: action.isLike, likeCount: p.likeCount + PLUS_ONE }
              : { ...p, isLike: action.isLike, likeCount: p.likeCount - PLUS_ONE }
            : p,
        ),
      };
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile,
      };
    case 'SET-USER-STATUS':
      return {
        ...state,
        status: action.status,
      };
    case 'SAVE-PHOTO-SUCCESS':
      return { ...state, profile: { ...state.profile, photos: action.photo } };
    default:
      return state;
  }
};
