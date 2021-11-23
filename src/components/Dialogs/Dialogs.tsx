import React, {ChangeEvent, useState} from "react";
import s from './Dialogs.module.scss'
import {DialogsName} from "./DialogsName/DialogsName";
import {DialogsMessage} from "./DialogsMessage/DialogsMessage";
import {DialogsPageType} from "../../Redux/State";
import {v1} from "uuid";

type DialogsPropsType = {
    dialogsData: DialogsPageType
}

export function Dialogs(props: DialogsPropsType) {

    let [messages, setMessages] = useState(props.dialogsData.messages)
    let [post, setPost] = useState('')
    let [error, setError] = useState('')
    let [activeButton, setActiveButton] = useState(true)

    const addMessage = (mes: string) => {
        let message = {id: v1(), message: mes}
        setMessages([...messages, message])
    }
    const onClickAddMessage = () => {
        if (post.trim() !== '') {
            addMessage(post)
            setPost('')
            setActiveButton(true)
        } else {
            setError('Пустая строка')
        }
    }
    const OnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
            setActiveButton(true)
        } else {
            setPost(e.currentTarget.value)
            setActiveButton(false)
            setError('')
        }
    }

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogsName id={d.id} name={d.name} key={d.id}/>)
    let dialogsMessage = messages.map(m => <DialogsMessage message={m.message}/>)


    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs__list}>
                {dialogsElement}
            </div>
            <div className={s.dialogs__messages}>
                {dialogsMessage}
                <textarea value={post} onChange={OnChangeHandler}></textarea>
                <button disabled={activeButton} onClick={onClickAddMessage}>Add Message</button>
                <div><span>{error}</span></div>
            </div>
        </div>
    )
}
