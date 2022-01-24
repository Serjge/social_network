import {v1} from "uuid";
import {StateType} from "./State";
import {ProfileReducer} from "./ProfileReducer";

const state: StateType = {
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Dmitriy'},
        ],
        messages: [
            {id: v1(), message: 'Hello friend!'},
        ],
        messagesNewDialogs: ''
    },
    profilePage: {
        messageForNewPost: '',
        posts: [
            {id: '1', message: `Hi, how are you?`, likeCount: 10, isLike: false},
        ]
    },
}

test('add post', () => {
    // @ts-ignore
    const newState = ProfileReducer(state.profilePage, {type: "ADD-POST"})
    expect(newState.posts[0].message).toBe('')
    expect(newState.posts.length).toBe(2)
})
test('Update text post', () => {
    // @ts-ignore
    const newState = ProfileReducer(state.profilePage, {type: "UPDATE-NEW-POST-TEXT", newPostText: 'new'})
    expect(newState.messageForNewPost).toBe('new')
})
test('Delete post ', () => {
    // @ts-ignore
    const newState = ProfileReducer(state.profilePage, {type: "REMOVE-POST", removeId: '1'})
    expect(newState.posts.length).toBe(0)
})
test('Likes post ', () => {
    // @ts-ignore
    const newState = ProfileReducer(state.profilePage, {type: "ADD-LIKE", LikeId: '1', isLike: true})
    expect(newState.posts[0].isLike).toBe(true)
    expect(newState.posts[0].likeCount).toBe(11)
})



