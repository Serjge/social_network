import s from "./DialogsMessage.module.scss";
import React from "react";

type DialogsMessageType = {
    message: string
}

export function DialogsMessage(props: DialogsMessageType) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}