import React, {ChangeEvent} from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogType, MessagesType} from "../../Redux/State";

type DialogsPropsType = {
    addMessage: () => void
    OnChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    dialogs: DialogType[]
    messages: MessagesType[]
    messagesNewDialogs: string
    error: string
}

export function Dialogs({
                            addMessage,
                            OnChangeHandler,
                            dialogs,
                            messages,
                            messagesNewDialogs,
                            error
                        }: DialogsPropsType) {

    const disabledButton = messagesNewDialogs === ''

    const dialogsElement = dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    const dialogsMessage = messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <textarea value={messagesNewDialogs} onChange={OnChangeHandler}/>
                <button disabled={disabledButton} onClick={addMessage}>Add Message</button>
                <div><span>{error}</span></div>
            </div>
        </div>
    )
}
