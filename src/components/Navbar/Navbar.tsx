import React from 'react'
import s from './Navbar.module.scss'
import {ItemMenu} from "./Item/ItemMenu";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
                <ItemMenu to={'/profile/'} nameMenu={'Profile'}/>
                <ItemMenu to={'/dialogs/'} nameMenu={'Message'}/>
                {/*<ItemMenu to={'/music'} nameMenu={'Music'}/>*/}
                {/*<ItemMenu to={'/news'} nameMenu={'News'}/>*/}
                <ItemMenu to={'/users'} nameMenu={'Users'}/>
                <ItemMenu to={'/settings'} nameMenu={'Settings'}/>
        </nav>
    )

}
