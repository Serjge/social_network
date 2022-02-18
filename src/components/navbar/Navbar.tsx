// import React from 'react'
// import s from './Navbar.module.scss'
// import {ItemMenu} from "./item/ItemMenu";
//
// export const Navbar = () => {
//     return (
//         <nav className={s.nav}>
//                 <ItemMenu to={'/profile/'} nameMenu={'profile'}/>
//                 <ItemMenu to={'/dialogs/'} nameMenu={'Message'}/>
//                 {/*<ItemMenu to={'/music'} nameMenu={'Music'}/>*/}
//                 {/*<ItemMenu to={'/news'} nameMenu={'News'}/>*/}
//                 <ItemMenu to={'/users'} nameMenu={'users'}/>
//                 <ItemMenu to={'/settings'} nameMenu={'Settings'}/>
//         </nav>
//     )
//
// }
import { PureComponent, ReactElement } from 'react';

import { ItemMenu } from './item';
import style from './Navbar.module.scss';

import { path } from 'enum';

export class Navbar extends PureComponent {
  render(): ReactElement {
    return (
      <nav className={style.nav}>
        <ItemMenu to={path.PROFILE} nameMenu="Profile" />
        <ItemMenu to={path.DIALOGS} nameMenu="Message" />
        <ItemMenu to={path.USERS} nameMenu="Users" />
        <ItemMenu to={path.SETTINGS} nameMenu="Settings" />
      </nav>
    );
  }
}
