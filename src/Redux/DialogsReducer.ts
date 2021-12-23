import {ActionsType} from "./State";
import {v1} from "uuid";

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
export type  InitialDialogsStateType = typeof initialState

const initialState = {
    dialogs: [
        {id: v1(), name: 'Dmitriy'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Mariya'},
        {id: v1(), name: 'Larisa'},
        {id: v1(), name: 'Sergey'},
        {id: v1(), name: 'Dmitriy'}
    ] as DialogType[],
    messages: [
        {id: v1(), message: 'Hello friend!'},
        {id: v1(), message: 'Glad to see you!'},
        {id: v1(), message: 'How are you?'}
    ] as MessagesType[],
    messagesNewDialogs: '' as string
}

export const DialogsReducer = (state=initialState, action: ActionsType):InitialDialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage:MessagesType = {id: v1(), message: state.messagesNewDialogs}

            return {
                ...state,
                messagesNewDialogs: '',
                messages: [...state.messages,newMessage]
            }
        case "UPDATE-NEW-DIALOG-TEXT":
            return {
                ...state,
                messagesNewDialogs: action.newDialogText
            }
        default:
            return state
    }
}

export const AddMessageAC = () => {
    return {
        type: 'ADD-MESSAGE',
    } as const
}
export const ChangeNewDialogCallBackAC = (newDialogText: string) => {
    return {
        type: 'UPDATE-NEW-DIALOG-TEXT',
        newDialogText: newDialogText
    } as const
}


