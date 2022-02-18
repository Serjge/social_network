// import s from "./DialogsName.module.scss";
// import {NavLink} from "react-router-dom";
// import React from "react";
//
// type DialogsNameType = {
//     name: string
//     id: string
// }
//
// export function DialogsName(props: DialogsNameType) {
//     return (
//         <div className={s.name}>
//             <NavLink to={'/dialogs/' + props.id}
//                      className={(navDate) => navDate.isActive ? s.active : ''}>{props.name}</NavLink>
//         </div>
//     )
// }

import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './DialogsName.module.scss';

type DialogsNamePropsType = {
  name: string;
  id: string;
};

export class DialogsName extends PureComponent<DialogsNamePropsType> {
  render(): ReactElement {
    const { name, id } = this.props;
    return (
      <div className={style.name}>
        <NavLink
          to={`/dialogs/${id}`}
          className={navDate => (navDate.isActive ? style.active : '')}
        >
          {name}
        </NavLink>
      </div>
    );
  }
}
