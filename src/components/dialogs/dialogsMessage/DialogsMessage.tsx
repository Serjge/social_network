// import React from "react";
//
// type DialogsMessageType = {
//     message: string
// }
//
// export function dialogsMessage(props: DialogsMessageType) {
//
//     return (
//         <div className={s.message}>{props.message}</div>
//     )
// }
import { PureComponent, ReactElement } from 'react';

import style from './DialogsMessage.module.scss';

type DialogsMessagePropsType = {
  message: string;
};

export class DialogsMessage extends PureComponent<DialogsMessagePropsType> {
  render(): ReactElement {
    const { message } = this.props;
    return <div className={style.message}>{message}</div>;
  }
}
