import {AppStateType} from "./redux_store";
import {DialogType, MessagesType} from "./DialogsReducer";

export const getDialogs = (state: AppStateType): DialogType[] => {
    return state.dialogsPage.dialogs
}

export const getMessages = (state: AppStateType): MessagesType[] => {
    return state.dialogsPage.messages
}
