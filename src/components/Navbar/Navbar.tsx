import React from 'react'
import c from './Navbar.module.scss'
import ItemMenu from "./Item/ItemMenu";


const Navbar = () => {
    return (
        <nav className={c.nav}>
            <ItemMenu href={'#profile'} nameMenu={'Profile'}/>
            <ItemMenu href={'#message'} nameMenu={'Message'}/>
            <ItemMenu href={'#musik'} nameMenu={'Music'}/>
            <ItemMenu href={'#news'} nameMenu={'News'}/>
            <ItemMenu href={'#setings'} nameMenu={'Setings'}/>

        </nav>
    )

}


export default Navbar