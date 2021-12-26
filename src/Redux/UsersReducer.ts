export type InitialUsersStateType = { users: UserType[] }
const initialState: InitialUsersStateType = {
    users: []
    //     {
    //         id: v1(),
    //         name: 'Dmitriy',
    //         age: 35,
    //         urlAvatar: 'https://randomuser.me/api/portraits/men/15.jpg',
    //         followed: false,
    //         status: 'I am boss',
    //         location: {city: 'Pskov', country: 'Russia'}
    //     }, {
    //         id: v1(),
    //         name: 'Andrey',
    //         age: 25,
    //         urlAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    //         followed: true,
    //         status: 'I am student',
    //         location: {city: 'Minsk', country: 'Belarus'}
    //     }, {
    //         id: v1(),
    //         name: 'Anna',
    //         age: 30,
    //         urlAvatar: 'https://randomuser.me/api/portraits/women/75.jpg',
    //         followed: false,
    //         status: 'I am boss',
    //         location: {city: 'Moscow', country: 'Russia'}
    //     },
    // ] as UserType[]
}

export type UserType = {
    id: string
    name: string
    age: number
    photos: { small:string, large:string }
    followed: boolean
    status: string
    location: { city: string, country: string }
}

type ActionsUsersType =
    ReturnType<typeof FollowAC>
    | ReturnType<typeof UnFollowAC>
    | ReturnType<typeof setUsersAC>

export const UsersReducer = (state :InitialUsersStateType =initialState , action: ActionsUsersType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
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
                users: [ ...action.users]
            }
        default:
            return state
    }
}

export const FollowAC = (id: string) => {
    return {
        type: 'FOLLOW',
        id: id,
    } as const
}
export const UnFollowAC = (id: string) => {
    return {
        type: 'UNFOLLOW',
        id: id,
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: 'SET-USERS',
        users: users
    } as const
}
