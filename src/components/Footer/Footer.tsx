import React from 'react'
// import style from './Header.scss'
import s from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.footer__wrap}>
                <> by Serjge, © 2021, It-incubator.ru</>
            </div>
        </footer>
    )
}
// export default Footer