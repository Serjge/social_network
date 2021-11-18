import { v1 } from "uuid"

export type PostsType = {
    id: string,
    message: string,
    likeCount: number
}
export type ProfilePageType = {
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
        ]
    },
    profilePage: {
        posts: [
            {id: v1(), message: `Hi, how are you?`, likeCount: 10},
            {id: v1(), message: `It's my first post`, likeCount: 15},
            {id: v1(), message: `React, it's cool!`, likeCount: 50}
        ]
    },
    sidebar: {}

}
