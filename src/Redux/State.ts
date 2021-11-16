export type PostsType = {
    id: number,
    message: string,
    likeCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type MessagesType = {
    id: number,
    message: string
}
export type DialogType = {
    id: number,
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
            {id: 1, name: 'Dmitriy'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Mariya'},
            {id: 4, name: 'Larisa'},
            {id: 5, name: 'Sergey'},
            {id: 6, name: 'Dmitriy'}
        ],
        messages: [
            {id: 1, message: 'Hello friend!'},
            {id: 2, message: 'Glad to see you!'},
            {id: 3, message: 'How are you?'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: `Hi, how are you?`, likeCount: 10},
            {id: 2, message: `It's my first post`, likeCount: 15},
            {id: 3, message: `React, it's cool!`, likeCount: 50}
        ]
    },
    sidebar: {}

}
