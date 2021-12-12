import {v1} from "uuid";
import {ActionsType, PostsType, ProfilePageType} from "./State";

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
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

export type ProfileActionsType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof ChangeNewTextAC>
    | ReturnType<typeof RemovePostAC>
    | ReturnType<typeof AddLikeAC>

export const ProfileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likeCount: 0,
                isLike: false
            }
            state.posts.unshift(newPost)
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.messageForNewPost = action.newPostText
            return state
        case "REMOVE-POST":
            const removePost = state.posts.find(p => p.id === action.removeId)
            if (removePost) {
                const indexPost = state.posts.indexOf(removePost)
                state.posts.splice(indexPost, 1)
            }
            return state
        case "ADD-LIKE":
            const likePost = state.posts.find(p => p.id === action.LikeId)
            if (likePost) {
                likePost.isLike = action.isLike
                action.isLike ? likePost.likeCount += 1 : likePost.likeCount -= 1
            }
            return state
        default:
            return state
    }
}