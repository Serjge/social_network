import React from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPageType} from "../../Redux/State";

export type DialogsPropsType = {

    dialogsData: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogsName  id={String(d.id)} name={d.name} key={d.id}/>)
    let dialogsMessage = props.dialogsData.messages.map(m => <DialogsMessage message={m.message}/>)

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
            </div>
        </div>
    )
}
