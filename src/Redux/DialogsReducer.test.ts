import {v1} from "uuid";
import {DialogsReducer} from "./DialogsReducer";
import {StateType} from "./State";

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
            {id: v1(), message: `Hi, how are you?`, likeCount: 10, isLike: false},
        ]
    },
}

test('add message in dialogs', () => {
    const newState = DialogsReducer(state.dialogsPage, {type: "UPDATE-NEW-DIALOG-TEXT", newDialogText: 'Test'})
    expect(newState.messagesNewDialogs).toBe('Test')
})

test('update text in dialogs', () => {
    const newState2 = DialogsReducer(state.dialogsPage, {type: "ADD-MESSAGE", messageText: 'T'})
    expect(newState2.messages[newState2.messages.length - 1].message).toBe('T')
    expect(newState2.messages.length).toBe(2)
})
