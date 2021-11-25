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
        messageForNewPost: '',
        posts: [
            {id: v1(), message: `Hi, how are you?`, likeCount: 10, isDone: false},
            {id: v1(), message: `It's my first post`, likeCount: 15, isDone: false},
            {id: v1(), message: `React, it's cool!`, likeCount: 50, isDone: false}
        ]
    },
    sidebar: {}

}


export const addPost = (postText: string) => {
    const newPost: PostsType = {
        id: v1(),
        message: postText,
        likeCount: 0,
        isDone: false
    }
    state.profilePage.posts.unshift(newPost)
    renderTree(state)


    // let message = {id: v1(), message: post, likeCount: 0, isDone: false}
    // let newMessage = [message, ...postsData]
    // setPostsData(newMessage)
}

export const changeNewTextCallback = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    renderTree(state)
}


// const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
//     if (e.currentTarget.value === '') {
//         setDisableButton(true)
//     } else {
//         setDisableButton(false)
//         setPost(e.currentTarget.value)
//         setError('')
//     }
// }