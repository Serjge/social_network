import React, {ChangeEvent, useState} from "react";
import {StoreType} from "../../Redux/State";
import {AddMessageAC, ChangeNewDialogCallBackAC} from "../../Redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}

export function DialogsContainer({store}: DialogsPropsType) {
    const state = store.getState()
    const [error, setError] = useState('')

    const onClickAddMessage = () => {
        if (state.dialogsPage.messagesNewDialogs.trim() === '') {
            setError('Пустая строка')
        } else {
            store.dispatch(AddMessageAC(state.dialogsPage.messagesNewDialogs))
            store.dispatch(ChangeNewDialogCallBackAC(''))
        }
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
        } else {
            setError('')
        }
        store.dispatch(ChangeNewDialogCallBackAC(e.currentTarget.value))
    }

    return (
        <Dialogs dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 messagesNewDialogs={state.dialogsPage.messagesNewDialogs}
                 addMessage={onClickAddMessage}
                 OnChangeHandler={OnChangeHandler}
                 error={error}
        />
    )
}
