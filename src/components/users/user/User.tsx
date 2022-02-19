import { PureComponent, ReactElement } from 'react';

import { NavLink } from 'react-router-dom';

import style from './User.module.scss';

import userPhoto from 'assets/img/defaultUsersAvatar.webp';
import { path } from 'enum';

type UserPropsType = {
  idUser: string;
  photos: { small: string; large: string };
  status: string;
  name: string;
  age: number;
  followed: boolean;
  follow: (id: string) => void;
  unFollow: (id: string) => void;
  followingInProgress: number[];
};

export class User extends PureComponent<UserPropsType> {
  render(): ReactElement {
    const {
      age,
      name,
      idUser,
      photos,
      followed,
      status,
      follow,
      unFollow,
      followingInProgress,
    } = this.props;

    const { small } = photos;

    const disableFollow = (id: string): boolean =>
      followingInProgress.some(idFollow => idFollow === +id);

    return (
      <div key={idUser} className={style.wrapper}>
        <div>
          <div className={style.avatar}>
            <NavLink to={`${path.profile}${idUser}`}>
              <img src={small === null ? userPhoto : small} alt={name} />
            </NavLink>
          </div>
          <div>
            {followed ? (
              <button
                type="button"
                disabled={disableFollow(idUser)}
                onClick={() => unFollow(idUser)}
              >
                Unfollow
              </button>
            ) : (
              <button
                type="button"
                disabled={disableFollow(idUser)}
                onClick={() => follow(idUser)}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={style.content}>
          <div className={style.description}>
            <div>{name}</div>
            <div>{age}</div>
            <div>{status}</div>
          </div>
        </div>
      </div>
    );
  }
}
