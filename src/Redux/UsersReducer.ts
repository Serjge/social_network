import {v1} from "uuid";
import {ActionsType} from "./State";

export type InitialUsersStateType = typeof initialState

const initialState = {
    users: [
        {
            id: v1(),
            name: 'Dmitriy',
            age: 35,
            urlAvatar: 'https://randomuser.me/api/portraits/men/15.jpg',
            followed: false,
            status: 'I am boss',
            location: {city: 'Pskov', country: 'Russia'}
        }, {
            id: v1(),
            name: 'Andrey',
            age: 25,
            urlAvatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            followed: true,
            status: 'I am student',
            location: {city: 'Minsk', country: 'Belarus'}
        }, {
            id: v1(),
            name: 'Anna',
            age: 30,
            urlAvatar: 'https://randomuser.me/api/portraits/women/75.jpg',
            followed: false,
            status: 'I am boss',
            location: {city: 'Moscow', country: 'Russia'}
        },
    ] as UserType[]
}

export type UserType = {
    id: string
    name: string
    age: number
    urlAvatar: string
    followed: boolean
    status: string
    location: { city: string, country: string }
}

export const UsersReducer = (state = initialState, action: ActionsType): InitialUsersStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id
                    ? {...u, followed: true}
                    : u)
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.id
                    ? {...u, followed: false}
                    : u)
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
