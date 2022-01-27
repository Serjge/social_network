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
}
type ActionsDialogsType =
    ReturnType<typeof AddMessage>

export const DialogsReducer = (state = initialState, action: ActionsDialogsType): InitialDialogsStateType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage: MessagesType = {id: v1(), message: action.newText}

            return {
                ...state,
                messages: [...state.messages, newMessage]
            }
        default:
            return state
    }
}

export const AddMessage = (newText: string) => {
    return {
        type: 'ADD-MESSAGE',
        newText
    } as const
}
