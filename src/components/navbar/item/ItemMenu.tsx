// import React from "react";
// import c from "./ItemMenu.module.scss";
// import {NavLink, useMatch} from "react-router-dom";
// import s from './ItemMenu.module.scss'
//
// type ItemMenuPropsType = {
//     nameMenu: string
//     to: string
// }
//
// export const ItemMenu = (props: ItemMenuPropsType) => {
//     let match = useMatch(props.to + "/*");  // переменная чтобы работал выделание меню при переходе по диалогам
//     return (
//         <div className={c.item}>
//             <NavLink
//                 className={match ? s.active : ""}
//                 // className={({isActive})=> isActive ? s.active : ""}
//                 to={props.to}>{props.nameMenu}
//             </NavLink>
//         </div>
//     )
// }

import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './ItemMenu.module.scss';

type ItemMenuPropsType = {
  nameMenu: string;
  to: string;
};

export class ItemMenu extends PureComponent<ItemMenuPropsType> {
  render(): ReactElement {
    const { nameMenu, to } = this.props;

    // const match = useMatch(`${to}/*`);
    // const styleClass = match ? style.active : '';

    return (
      <div className={style.item}>
        <NavLink className={style.active} to={to}>
          {nameMenu}
        </NavLink>
      </div>
    );
  }
}
