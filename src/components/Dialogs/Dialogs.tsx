import React from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPropsType} from "./DialogsContainer";
import { Navigate } from "react-router-dom";

export function Dialogs({
                            addMessage,
                            OnChangeHandler,
                            dialogsPage,
                            isAuth
                        }: DialogsPropsType) {

    if (!isAuth) {
        return <Navigate  to={'/login'}/>
    }

    const dialogsElement = dialogsPage.dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    const dialogsMessage = dialogsPage.messages.map(m => <DialogsMessage key={m.id} message={m.message}/>)

    const onChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        OnChangeHandler(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <textarea value={dialogsPage.messagesNewDialogs} onChange={onChangeMessage}/>
                <button onClick={addMessage}>Add Message</button>
            </div>
        </div>
    )
}
