import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {ActionsType, AddMessageAC, ChangeNewDialogCallBackAC, DialogsPageType} from "../../Redux/State";

type DialogsPropsType = {
    dialogsData: DialogsPageType
    dispatch: (action: ActionsType) => void
}

export function Dialogs(props: DialogsPropsType) {

    const [error, setError] = useState('')

    const onClickAddMessage = () => {
        if (props.dialogsData.messagesNewDialogs.trim() === '') {
            setError('Пустая строка')
        } else {
            props.dispatch(AddMessageAC (props.dialogsData.messagesNewDialogs))
            props.dispatch(ChangeNewDialogCallBackAC(''))
        }
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
        } else {
            setError('')
        }
        props.dispatch(ChangeNewDialogCallBackAC(e.currentTarget.value))
    }
    const disabledButton = props.dialogsData.messagesNewDialogs === ''

    const dialogsElement = props.dialogsData.dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    const dialogsMessage = props.dialogsData.messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <textarea value={props.dialogsData.messagesNewDialogs} onChange={OnChangeHandler}/>
                <button disabled={disabledButton} onClick={onClickAddMessage}>Add Message</button>
                <div><span>{error}</span></div>
            </div>
        </div>
    )
}
