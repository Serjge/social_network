import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './ItemMenu.module.scss';

type ItemMenuPropsType = {
  nameMenu: string;
  to: string;
};

export class ItemMenu extends PureComponent<ItemMenuPropsType> {
  render(): ReactElement {
    const { nameMenu, to } = this.props;

    return (
      <div className={style.item}>
        <NavLink className={style.active} to={to}>
          {nameMenu}
        </NavLink>
      </div>
    );
  }
}
