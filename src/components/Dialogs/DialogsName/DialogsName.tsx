import s from "./DialogsName.module.scss";
import {NavLink} from "react-router-dom";
import React from "react";
import {StateType} from "../../../Redux/State";

type DialogsNameType = {

    name: string
    id: string
}

export function DialogsName(props: DialogsNameType) {
    return (
        <div className={s.name}>
            <NavLink to={'/dialogs/' + props.id}
                     className={(navDate) => navDate.isActive ? s.active : ''}>{props.name}</NavLink>
        </div>
    )
}