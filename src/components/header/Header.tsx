// import React from 'react'
// import s from './Header.module.scss'
// import {NavLink} from "react-router-dom";
//
// type HeaderPropsType = {
//     login: string
//     email: string
//     usersId: string
//     isFetching: boolean
//     setToggleIsFetching: (isFetching: boolean) => void
//     auth: boolean
//     logout: () => void
// }
//
// export const Header = ({
//                            login,
//                            auth,
//                            logout,
//                        }: HeaderPropsType) => {
//     return (
//         <header className={s.header}>
//             <div className={s.header__wrap}>
//                 <img alt='' src='https://sektascience.com/wp-content/uploads/2018/06/logo_300x300.png'/>
//                 <div>
//                     {auth ? `${login}` : 'guest'}
//                     {auth
//                         ? <NavLink onClick={logout} to={'/login'}>logout</NavLink>
//                         : <NavLink to={'/login'}>login</NavLink>}
//
//                 </div>
//             </div>
//         </header>
//     )
// }



import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

type HeaderPropsType = {
  login: string;
  auth: boolean;
  logout: () => void;
};

export class Header extends PureComponent<HeaderPropsType> {
  render(): ReactElement {
    let { login, auth, logout } = this.props;
    return (
      <header className={ style.header }>
        <div className={ style.header__wrap }>
          <img
            alt=""
            src="https://sektascience.com/wp-content/uploads/2018/06/logo_300x300.png"
          />
          <div>
            { auth ? `${ login }` : 'guest' }
            { auth ? (
              <NavLink onClick={ logout } to="/login">
                logout
              </NavLink>
            ) : (
              <NavLink to="/login">Login</NavLink>
            ) }
          </div>
        </div>
      </header>
    );
  }
}
