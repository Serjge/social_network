export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [] as UserType[],
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: true

}

export type UserType = {
    id: string
    name: string
    age: number
    photos: { small: string, large: string }
    followed: boolean
    status: string
    location: { city: string, country: string }
}

type ActionsUsersType =
    ReturnType<typeof setFollow>
    | ReturnType<typeof setUnFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUserCount>
    | ReturnType<typeof setToggleIsFetching>

export const UsersReducer = (state: InitialUsersStateType = initialState, action: ActionsUsersType): InitialUsersStateType => {
    switch (action.type) {
        case "SET-FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "SET-UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USER-COUNT':
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
 case 'TOGGLE-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }

        default:
            return state
    }
}

export const setFollow = (id: string) => {
    return {
        type: 'SET-FOLLOW',
        id: id,
    } as const
}
export const setUnFollow = (id: string) => {
    return {
        type: 'SET-UNFOLLOW',
        id: id,
    } as const
}

export const setUsers = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage: currentPage
    } as const
}
export const setTotalUserCount = (totalUserCount: number) => {
    return {
        type: 'SET-TOTAL-USER-COUNT',
        totalUserCount: totalUserCount
    } as const
}
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        isFetching: isFetching
    } as const
}
