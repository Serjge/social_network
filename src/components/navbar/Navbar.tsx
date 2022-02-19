import { PureComponent, ReactElement } from 'react';

import style from './Navbar.module.scss';

import { ItemMenu } from 'components';
import { path } from 'enum';

export class Navbar extends PureComponent {
  render(): ReactElement {
    return (
      <nav className={style.nav}>
        <ItemMenu to={path.profile} nameMenu="Profile" />
        <ItemMenu to={path.dialogs} nameMenu="Message" />
        <ItemMenu to={path.users} nameMenu="Users" />
        <ItemMenu to={path.settings} nameMenu="Settings" />
      </nav>
    );
  }
}
