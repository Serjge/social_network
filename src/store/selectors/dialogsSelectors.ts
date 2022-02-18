import { AppStateType } from 'store/store';
import { DialogType, MessagesType } from 'type';

export const getDialogs = (state: AppStateType): DialogType[] =>
  state.dialogsPage.dialogs;

export const getMessages = (state: AppStateType): MessagesType[] =>
  state.dialogsPage.messages;
