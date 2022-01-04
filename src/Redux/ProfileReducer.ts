import {v1} from "uuid";

export type  InitialProfileStateType = typeof initialState

const initialState = {
    messageForNewPost: '' as string,
    posts: [
        {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
        {id: v1(), message: `It's my first post`, likeCount: 15, isLike: false},
        {id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false}
    ] as PostsType[],
    profile: null as ProfileType,
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

type ActionsProfileType =
    ReturnType<typeof addPost>
    | ReturnType<typeof ChangeNewText>
    | ReturnType<typeof RemovePost>
    | ReturnType<typeof AddLike>
    | ReturnType<typeof setUserProfile>



export const ProfileReducer = (state = initialState, action: ActionsProfileType): InitialProfileStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: state.messageForNewPost.trim(),
                likeCount: 0,
                isLike: false
            }
            return {
                ...state,
                messageForNewPost: '',
                posts: [ newPost,...state.posts]
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                messageForNewPost: action.newPostText
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


        default:
            return state
    }
}
export const addPost = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const ChangeNewText = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
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
