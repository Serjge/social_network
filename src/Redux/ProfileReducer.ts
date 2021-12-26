import {v1} from "uuid";

export type  InitialProfileStateType = typeof initialState

const initialState = {
    messageForNewPost: '' as string,
    posts: [
        {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
        {id: v1(), message: `It's my first post`, likeCount: 15, isLike: false},
        {id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false}
    ] as PostsType[]
}
export type PostsType = {
    id: string
    message: string
    likeCount: number
    isLike: boolean
}

type ActionsProfileType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof ChangeNewTextAC>
    | ReturnType<typeof RemovePostAC>
    | ReturnType<typeof AddLikeAC>


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
        default:
            return state
    }
}
export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}

export const ChangeNewTextAC = (newPostText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newPostText: newPostText
    } as const
}

export const RemovePostAC = (removeId: string) => {
    return {
        type: 'REMOVE-POST',
        removeId: removeId
    } as const
}
export const AddLikeAC = (LikeId: string, isLike: boolean) => {
    return {
        type: 'ADD-LIKE',
        LikeId: LikeId,
        isLike: isLike
    } as const
}