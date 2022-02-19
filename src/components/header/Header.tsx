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
            {auth ? `${login}` : 'guest'}
            {auth ? (
              <NavLink onClick={logout} to={path.login}>
                Logout
              </NavLink>
            ) : (
              <NavLink to={path.login}>Login</NavLink>
            )}
          </div>
        </div>
      </header>
    );
  }
}
