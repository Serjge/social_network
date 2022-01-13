import React from 'react'
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    login: string
    email: string
    usersId: string
    isFetching: boolean
    setToggleIsFetching: (isFetching: boolean) => void
    auth: boolean
}

export const Header = ({
                           login,
                           auth,
                       }: HeaderPropsType) => {

    return (
        <header className={s.header}>
            <div className={s.header__wrap}>
                <img alt='' src='https://sektascience.com/wp-content/uploads/2018/06/logo_300x300.png'/>
                <div>
                    {auth ? login : 'guest'}
                    {auth
                        ? <NavLink to={'/logout'}>logout</NavLink>
                        : <NavLink to={'/login'}>Login</NavLink>}

                </div>
            </div>

        </header>
    )
}
