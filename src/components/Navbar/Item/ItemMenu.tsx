import React from "react";
import c from "./ItemMenu.module.scss";
import {NavLink} from "react-router-dom";

type ItemMenuPropsType = {
    nameMenu: string
    href: string
}

export const ItemMenu = (props: ItemMenuPropsType) => {
    return (
        <div className={c.item}>
            <NavLink className={(navDate) => navDate.isActive ? c.active : ''}
                     to={props.href}>{props.nameMenu}</NavLink>
        </div>
    )
}
