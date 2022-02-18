import {AppStateType} from "store/store";
import { DialogType, MessagesType } from 'type';

export const getDialogs = (state: AppStateType): DialogType[] => {
    return state.dialogsPage.dialogs
}

export const getMessages = (state: AppStateType): MessagesType[] => {
    return state.dialogsPage.messages
}
