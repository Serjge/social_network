import { ChangeEvent, PureComponent, ReactElement } from 'react';

import style from './ProfileInfo.module.scss';

import avatarDefault from 'assets/img/defaultAvatar.png';
import background from 'assets/img/profileBackground.webp';
import { ProfileStatus } from 'components';
import { ProfileType } from 'type';

type ProfileInfoPropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (userId: string) => void;
  isOwner: boolean;
  savePhoto: (file: string | Blob) => void;
};

const ZERO_FILE = 0;

export class ProfileInfo extends PureComponent<ProfileInfoPropsType> {
  render(): ReactElement {
    const { profile, status, updateStatus, isOwner, savePhoto } = this.props;
    const {
      photos: { large },
      fullName,
    } = profile;
    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files!.length) {
        savePhoto(e.target.files![ZERO_FILE]);
      }
    };

    return (
      <div>
        <div className={style.content}>
          <img alt="" src={background} />
        </div>
        <div className={style.avatar}>
          <img alt="" src={profile && large !== null ? large : avatarDefault} />
          {isOwner && <input onChange={onMainPhotoSelected} type="file" />}
          <div style={{ padding: '20px', textAlign: 'center' }}>
            {profile && fullName}
          </div>
          <ProfileStatus status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
}
