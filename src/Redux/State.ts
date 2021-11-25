import {v1} from "uuid"
import {renderTree} from "../render";

export type PostsType = {
    id: string
    message: string
    likeCount: number
    isDone: boolean
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type MessagesType = {
    id: string,
    message: string
}
export type DialogType = {
    id: string,
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>,
    messages: Array<MessagesType>
    messagesNewDialogs: string
}
export type StateType = {
    dialogsPage: DialogsPageType,
    profilePage: ProfilePageType
}
export let state = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dmitriy'},
            {id: v1(), name: 'Andrey'},
            {id: v1(), name: 'Mariya'},
            {id: v1(), name: 'Larisa'},
            {id: v1(), name: 'Sergey'},
            {id: v1(), name: 'Dmitriy'}
        ],
        messages: [
            {id: v1(), message: 'Hello friend!'},
            {id: v1(), message: 'Glad to see you!'},
            {id: v1(), message: 'How are you?'}
        ],
        messagesNewDialogs: ''
    },
    profilePage: {
        messageForNewPost: '',
        posts: [
            {id: v1(), message: `Hi, how are you?`, likeCount: 10, isDone: false},
            {id: v1(), message: `It's my first post`, likeCount: 15, isDone: false},
            {id: v1(), message: `React, it's cool!`, likeCount: 50, isDone: false}
        ]
    },
    sidebar: {}

}
const virtualState = state

export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: v1(),
        message: postText,
        likeCount: 0,
        isDone: false
    }
    state.profilePage.posts.unshift(newPost)
    renderTree(state)
}

export const changeNewTextCallback = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderTree(state)
}

export const likeAdd = (id: string, isDone: boolean) => {
    const posts = state.profilePage.posts.find(p => p.id === id)
    if (posts) {
        posts.isDone = isDone
        isDone === true ? posts.likeCount += 1 : posts.likeCount -= 1
        renderTree(state)
    }
}

export const removePost = (id: string) => {
    let posts = state.profilePage.posts.find(p => p.id === id)
    if (posts) {
        const indexPost = virtualState.profilePage.posts.indexOf(posts)
        state.profilePage.posts.splice(indexPost, 1)
        renderTree(state)
    }
}

export const addMessage = (mes: string) => {
    let message = {id: v1(), message: mes}
    state.dialogsPage.messages.push(message)
    renderTree(state)
}

export const changeNewDialogCallBack = (newText: string) => {
    state.dialogsPage.messagesNewDialogs = newText
    console.log(state.dialogsPage.messagesNewDialogs)
    renderTree(state)
}