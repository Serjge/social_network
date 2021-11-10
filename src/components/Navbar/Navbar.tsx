import React from 'react'
import s from './Navbar.module.scss'
import {ItemMenu} from "./Item/ItemMenu";


export const Navbar = () => {
    return (
        <nav className={s.nav}>

                <ItemMenu href={'/profile'} nameMenu={'Profile'}/>
                <ItemMenu href={'/dialogs'} nameMenu={'Message'}/>
                <ItemMenu href={'/music'} nameMenu={'Music'}/>
                <ItemMenu href={'/news'} nameMenu={'News'}/>
                <ItemMenu href={'/settings'} nameMenu={'Settings'}/>


        </nav>
    )

}


// export default Navbar