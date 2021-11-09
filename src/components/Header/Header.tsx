import React from 'react'
import s from './Header.module.scss'

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__wrap}>
            <img alt='' src='https://sektascience.com/wp-content/uploads/2018/06/logo_300x300.png'/>
            </div>
        </header>
    )
}
// export default Header