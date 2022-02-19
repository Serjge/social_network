import { PureComponent, ReactElement } from 'react';

import style from './ProfileInfo.module.scss';

import avatarDefault from 'assets/img/defaultAvatar.png';
import background from 'assets/img/profileBackground.webp';
import { ProfileStatus } from 'components';
import { ProfileType } from 'type';

type ProfileInfoPropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (userId: string) => void;
};

export class ProfileInfo extends PureComponent<ProfileInfoPropsType> {
  render(): ReactElement {
    const { profile, status, updateStatus } = this.props;

    return (
      <div>
        <div className={style.content}>
          <img alt="" src={background} />
        </div>
        <div className={style.avatar}>
          <img
            alt=""
            src={
              profile && profile.photos.large !== null
                ? profile.photos.large
                : avatarDefault
            }
          />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            {' '}
            {profile && profile.fullName}
          </div>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
}
