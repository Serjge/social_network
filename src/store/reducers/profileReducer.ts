import { ActionsProfileType } from 'store/actions';
import { PostsType, ProfileType } from 'type';
import { v1 } from 'uuid';


export type  InitialProfileStateType = typeof initialState

const initialState = {
  posts: [
    { id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false },
    { id: v1(), message: `It's my first post`, likeCount: 15, isLike: false },
    { id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false },
  ] as PostsType[],
  profile: null as ProfileType,
  status: '' as string,
}

export const ProfileReducer = (state = initialState, action: ActionsProfileType): InitialProfileStateType => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost: PostsType = {
        id: v1(),
        message: action.newText.trim(),
        likeCount: 0,
        isLike: false,
      }
      return {
        ...state,
        posts: [ newPost, ...state.posts ],
      }
    case 'REMOVE-POST':
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.removeId),
      }
    case 'ADD-LIKE':
      return {
        ...state,
        posts: state.posts.map(p => p.id === action.LikeId ?
          !p.isLike
            ? { ...p, isLike: action.isLike, likeCount: p.likeCount + 1 }
            : { ...p, isLike: action.isLike, likeCount: p.likeCount - 1 }
          : p),
      }
    case 'SET-USER-PROFILE':
      return {
        ...state,
        profile: action.profile,
      }
    case 'SET-USER-STATUS':
      return {
        ...state,
        status: action.status,
      }
    default:
      return state
  }
}
