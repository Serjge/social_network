import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './DialogsName.module.scss';

import { path } from 'enum';

type DialogsNamePropsType = {
  name: string;
  id: string;
};

export class DialogsName extends PureComponent<DialogsNamePropsType> {
  render(): ReactElement {
    const { name, id } = this.props;
    return (
      <div className={style.name}>
        <NavLink
          to={`${path.dialogs}${id}`}
          className={navDate => (navDate.isActive ? style.active : '')}
        >
          {name}
        </NavLink>
      </div>
    );
  }
}
