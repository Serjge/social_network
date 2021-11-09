import React from 'react'
// import style from './Header.scss'
import c from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={c.footer}>
            <div className={c.footer__wrap}>
                <> by Serjge, © 2021, It-incubator.ru</>
            </div>
        </footer>
    )
}
export default Footer