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
    getState: () => StateType
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
    postText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    messageText: string
}

type ChangeNewTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
type ChangeNewDialogCallBackActionType = {
    type: 'UPDATE-NEW-DIALOG-TEXT'
    newDialogText: string
}
type RemovePostActionType = {
    type: 'REMOVE-POST'
    removeId: string
}
type AddLikeActionType = {
    type: 'ADD-LIKE'
    LikeId: string
    isLike: boolean

}

export type ActionsType = AddPostActionType | ChangeNewTextActionType | AddMessageActionType | ChangeNewDialogCallBackActionType | RemovePostActionType | AddLikeActionType


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
    _callSubscriber() {
        console.log('State')
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action: ActionsType) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: v1(),
                message: action.postText,
                likeCount: 0,
                isLike: false
            }
            this._state.profilePage.posts.unshift(newPost)
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.messageForNewPost = action.newPostText
            this._callSubscriber()
        } else if (action.type === "ADD-MESSAGE" ) {
            const message = {id: v1(), message: action.messageText}
            this._state.dialogsPage.messages.push(message)
            this._callSubscriber()
        } else if (action.type === "UPDATE-NEW-DIALOG-TEXT") {
            this._state.dialogsPage.messagesNewDialogs = action.newDialogText
            this._callSubscriber()
        }else if (action.type === "REMOVE-POST") {
            const posts = this._state.profilePage.posts.find(p => p.id === action.removeId)
            if (posts) {
                const indexPost = this._state.profilePage.posts.indexOf(posts)
                this._state.profilePage.posts.splice(indexPost, 1)
                this._callSubscriber()
            }
        }else if (action.type === "ADD-LIKE") {
            const posts = this._state.profilePage.posts.find(p => p.id === action.LikeId)
            if (posts) {
                posts.isLike = action.isLike
                action.isLike ? posts.likeCount += 1 : posts.likeCount -= 1
                this._callSubscriber()
            }
        }
    }
}
