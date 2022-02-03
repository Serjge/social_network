import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../api/profileApi";
import {ActionAllType} from "./redux_store";

export type  InitialProfileStateType = typeof initialState

const initialState = {
    posts: [
        {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
        {id: v1(), message: `It's my first post`, likeCount: 15, isLike: false},
        {id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false}
    ] as PostsType[],
    profile: null as ProfileType,
    status: '' as string
}

export type ProfileType = {

    "aboutMe": string,
    "contacts": {
        "facebook": string,
        "website": string,
        "vk": string,
        "twitter": string,
        "instagram": string,
        "youtube": string,
        "github": string,
        "mainLink": string
    },
    "lookingForAJob": string,
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
} | null

export type PostsType = {
    id: string
    message: string
    likeCount: number
    isLike: boolean
}

export type ActionsProfileType =
    ReturnType<typeof addPost>
    | ReturnType<typeof RemovePost>
    | ReturnType<typeof AddLike>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>


export const ProfileReducer = (state = initialState, action: ActionsProfileType): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: action.newText.trim(),
                likeCount: 0,
                isLike: false
            }
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case "REMOVE-POST":
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.removeId)
            }
        case "ADD-LIKE":
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.LikeId ?
                    !p.isLike
                        ? {...p, isLike: action.isLike, likeCount: p.likeCount + 1}
                        : {...p, isLike: action.isLike, likeCount: p.likeCount - 1}
                    : p)
            }
        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        case "SET-USER-STATUS":
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export const requestProfile = (userId: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.authMe(userId)
        .then(response => dispatch(setUserProfile(response)))
}

export const requestStatus = (userId: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.getStatus(userId)
        .then(response => dispatch(setUserStatus(response)))
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionAllType>) => {
    profileAPI.updateStatusApi(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })
}

export const addPost = (newText: string) => {
    return {
        type: 'ADD-POST',
        newText
    } as const
}

export const RemovePost = (removeId: string) => {
    return {
        type: 'REMOVE-POST',
        removeId: removeId
    } as const
}
export const AddLike = (LikeId: string, isLike: boolean) => {
    return {
        type: 'ADD-LIKE',
        LikeId: LikeId,
        isLike: isLike
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        profile: profile

    } as const
}
export const setUserStatus = (status: any) => {
    return {
        type: 'SET-USER-STATUS',
        status: status

    } as const
}

