import {v1} from "uuid"

export type PostsType = {
    id: string
    message: string
    likeCount: number
    isLike: boolean
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
export type StoreType = {
    _state: StateType
    getState: () => void
    _callSubscriber: (_state:StateType) => void
    addPost: (postText: string) => void
    addMessage: (mes: string) => void
    changeNewTextCallback: (newText: string) =>void
    changeNewDialogCallBack: (newText: string) => void
    likeAdd: (id: string, isLike: boolean) => void
    removePost: (id: string) => void
    subscribe:(observer: (store:StateType) => void) => void
}

export let store = {
    _state: {
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
                {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
                {id: v1(), message: `It's my first post`, likeCount: 15, isLike: false},
                {id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false}
            ]
        },
        sidebar: {}
    },
    getState() {
      return this._state
    },
    _callSubscriber(_state:StateType) {
        console.log('State')
    },
    addPost(postText: string) {
        const newPost: PostsType = {
            id: v1(),
            message: postText,
            likeCount: 0,
            isLike: false
        }
        this._state.profilePage.posts.unshift(newPost)
        this._callSubscriber(this._state)
    },
    addMessage (mes: string) {
        const message = {id: v1(), message: mes}
        this._state.dialogsPage.messages.push(message)
        this._callSubscriber(this._state)
    },
    changeNewTextCallback(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._callSubscriber(this._state)
    },
    changeNewDialogCallBack (newText: string) {
        this._state.dialogsPage.messagesNewDialogs = newText
        this._callSubscriber(this._state)
    },
    likeAdd (id: string, isLike: boolean) {
        const posts = this._state.profilePage.posts.find(p => p.id === id)
        if (posts) {
            posts.isLike = isLike
            isLike ? posts.likeCount += 1 : posts.likeCount -= 1
            this._callSubscriber(this._state)
        }
    },
    removePost (id: string) {
        const posts = this._state.profilePage.posts.find(p => p.id === id)
        if (posts) {
            const indexPost = this._state.profilePage.posts.indexOf(posts)
            this._state.profilePage.posts.splice(indexPost, 1)
            this._callSubscriber(this._state)
        }
    },
    subscribe (observer: (story: StateType) => void) {
        this._callSubscriber = observer
    }
}

//
//
// export let state = {
//     dialogsPage: {
//         dialogs: [
//             {id: v1(), name: 'Dmitriy'},
//             {id: v1(), name: 'Andrey'},
//             {id: v1(), name: 'Mariya'},
//             {id: v1(), name: 'Larisa'},
//             {id: v1(), name: 'Sergey'},
//             {id: v1(), name: 'Dmitriy'}
//         ],
//         messages: [
//             {id: v1(), message: 'Hello friend!'},
//             {id: v1(), message: 'Glad to see you!'},
//             {id: v1(), message: 'How are you?'}
//         ],
//         messagesNewDialogs: ''
//     },
//     profilePage: {
//         messageForNewPost: '',
//         posts: [
//             {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
//             {id: v1(), message: `It's my first post`, likeCount: 15, isLike: false},
//             {id: v1(), message: `React, it's cool!`, likeCount: 50, isLike: false}
//         ]
//     },
//     sidebar: {}
//
// }
// const virtualState = state
//
// export const addPost = (postText: string) => {
//     const newPost: PostsType = {
//         id: v1(),
//         message: postText,
//         likeCount: 0,
//         isLike: false
//     }
//     state.profilePage.posts.unshift(newPost)
//     renderTree(state)
// }
//
// export const changeNewTextCallback = (newText: string) => {
//     state.profilePage.messageForNewPost = newText
//     renderTree(state)
// }
//
// export const likeAdd = (id: string, isLike: boolean) => {
//     const posts = state.profilePage.posts.find(p => p.id === id)
//     if (posts) {
//         posts.isLike = isLike
//         isLike ? posts.likeCount += 1 : posts.likeCount -= 1
//         renderTree(state)
//     }
// }
//
// export const removePost = (id: string) => {
//     let posts = state.profilePage.posts.find(p => p.id === id)
//     if (posts) {
//         const indexPost = virtualState.profilePage.posts.indexOf(posts)
//         state.profilePage.posts.splice(indexPost, 1)
//         renderTree(state)
//     }
// }
//
// export const addMessage = (mes: string) => {
//     let message = {id: v1(), message: mes}
//     state.dialogsPage.messages.push(message)
//     renderTree(state)
// }
//
// export const changeNewDialogCallBack = (newText: string) => {
//     state.dialogsPage.messagesNewDialogs = newText
//     console.log(state.dialogsPage.messagesNewDialogs)
//     renderTree(state)
// }
//
// const subscribe = (observer: (state: StateType) => void) => {
//     renderEntireThree = observer
//
// }