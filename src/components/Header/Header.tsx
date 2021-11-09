import React from 'react'
// import style from './Header.scss'
import c from './Header.module.scss'
const Header = () => {
    return (
        <header className={c.header}>
            <div className={c.header__wrap}>
            <img alt='' src='https://sektascience.com/wp-content/uploads/2018/06/logo_300x300.png'/>
            </div>
        </header>
    )
}
export default Header