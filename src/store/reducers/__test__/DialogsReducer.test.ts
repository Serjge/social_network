import { DialogsReducer } from 'store/reducers';
import { InitialDialogsStateType } from 'store/reducers/dialogsReducer';

let startState: InitialDialogsStateType

beforeEach(() => {

  startState = {

    dialogs: [
      { id: '1', name: 'Dmitriy' },
    ],
    messages: [
      { id: '1', message: 'Hello friend!' },
    ],
  }

})

test('update text in dialogs', () => {
    const newState = DialogsReducer(startState, {type: "ADD-MESSAGE", newText: 'new'})
    expect(newState.messages[newState.messages.length - 1].message).toBe('new')
    expect(newState.messages.length).toBe(2)
})
