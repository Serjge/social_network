import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPageType} from "../../Redux/State";

type DialogsPropsType = {
    dialogsData: DialogsPageType
    addMessage: (nes: string) => void
    changeNewDialogCallBack: (newText: string) => void
}

export function Dialogs(props: DialogsPropsType) {

    let [error, setError] = useState('')
    let [activeButton, setActiveButton] = useState(false)

    const onClickAddMessage = () => {
        if (props.dialogsData.messagesNewDialogs.trim() === '') {
            setError('Пустая строка')
        } else {
            props.addMessage(props.dialogsData.messagesNewDialogs)
            props.changeNewDialogCallBack('')
            setActiveButton(true)
        }
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
            setActiveButton(true)
        } else {
            // props.changeNewDialogCallBack(e.currentTarget.value)
            setActiveButton(false)
            setError('')
        }
        props.changeNewDialogCallBack(e.currentTarget.value)
    }

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    let dialogsMessage = props.dialogsData.messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <textarea value={props.dialogsData.messagesNewDialogs} onChange={OnChangeHandler}/>
                <button disabled={activeButton} onClick={onClickAddMessage}>Add Message</button>
                <div><span>{error}</span></div>
            </div>
        </div>
    )
}
