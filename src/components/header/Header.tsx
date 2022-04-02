import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './Header.module.scss';

import { IconS } from 'components';
import { path } from 'enum';

type HeaderPropsType = {
  login: string;
  auth: boolean;
  logout: () => void;
};

export class Header extends PureComponent<HeaderPropsType> {
  render(): ReactElement {
    const { login, auth, logout } = this.props;
    return (
      <header className={style.header}>
        <div className={style.wrap}>
          <IconS />
          <div>
            {auth ? (
              <span className={style.name}>{login}</span>
            ) : (
              <span className={style.name}>guest</span>
            )}
            {auth ? (
              <NavLink className={style.button} onClick={logout} to={path.login}>
                Logout
              </NavLink>
            ) : (
              <NavLink className={style.button} to={path.login}>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </header>
    );
  }
}
