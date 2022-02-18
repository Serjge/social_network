import { v1 } from 'uuid';

import { ActionsDialogsType } from 'store/actions';
import { DialogType, MessagesType } from 'type';

export type InitialDialogsStateType = typeof initialState;

const initialState = {
  dialogs: [
    { id: v1(), name: 'Dmitriy' },
    { id: v1(), name: 'Andrey' },
    { id: v1(), name: 'Mariya' },
    { id: v1(), name: 'Larisa' },
    { id: v1(), name: 'Sergey' },
    { id: v1(), name: 'Dmitriy' },
  ] as DialogType[],
  messages: [
    { id: v1(), message: 'Hello friend!' },
    { id: v1(), message: 'Glad to see you!' },
    { id: v1(), message: 'How are you?' },
  ] as MessagesType[],
};

export const DialogsReducer = (
  state = initialState,
  action: ActionsDialogsType,
): InitialDialogsStateType => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      return {
        ...state,
        messages: [...state.messages, { id: v1(), message: action.newText }],
      };
    default:
      return state;
  }
};

export const AddMessage = (newText: string) =>
  ({
    type: 'ADD-MESSAGE',
    newText,
  } as const);
