import {ActionsType, DialogsPageType} from "./State";
import {v1} from "uuid";

export const AddMessageAC = (messageText: string) => {
    return {
        type: 'ADD-MESSAGE',
        messageText: messageText
    } as const
}
export const ChangeNewDialogCallBackAC = (newDialogText: string) => {
    return {
        type: 'UPDATE-NEW-DIALOG-TEXT',
        newDialogText: newDialogText
    } as const
}

export type DialogsActionsType =
    | ReturnType<typeof AddMessageAC>
    | ReturnType<typeof ChangeNewDialogCallBackAC>


export const DialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case "ADD-MESSAGE":
            const message = {id: v1(), message: action.messageText}
            state.messages.push(message)
            return state
        case "UPDATE-NEW-DIALOG-TEXT":
            state.messagesNewDialogs = action.newDialogText
            return state
        default:
            return state
    }

}