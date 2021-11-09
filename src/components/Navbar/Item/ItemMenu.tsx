import React from "react";
import c from "./ItemMenu.module.scss";

type ItemMenuPropsType = {
    nameMenu: string
    href: string
}



const ItemMenu = (props: ItemMenuPropsType) => {
    return (
        <div className={c.item}><a href={props.href}>{props.nameMenu}</a></div>
    )
}
export default ItemMenu