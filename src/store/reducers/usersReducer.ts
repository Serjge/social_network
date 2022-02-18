
import { ActionsUsersType } from 'store/actions';

import { UserType } from 'type';

export type InitialUsersStateType = typeof initialState

const initialState = {
  users: [] as UserType[],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [] as number[],

}

export const UsersReducer = (state: InitialUsersStateType = initialState, action: ActionsUsersType): InitialUsersStateType => {
  switch (action.type) {
    case 'SET-FOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    case 'SET-UNFOLLOW':
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.id) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    case 'SET-USERS':
      return {
        ...state,
        users: [ ...action.users ],
      }
    case 'SET-CURRENT-PAGE':
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case 'SET-TOTAL-USER-COUNT':
      return {
        ...state,
        totalUserCount: action.totalUserCount,
      }
    case 'TOGGLE-IS-FETCHING':
      return {
        ...state,
        isFetching: action.isFetching,
      }
    case 'FOLLOWING-IN-PROGRESS':
      return {
        ...state,

        followingInProgress: action.isFollow
          ? [ ...state.followingInProgress, action.userId ]
          : state.followingInProgress.filter(i => i !== action.userId),
      }

    default:
      return state
  }
}
