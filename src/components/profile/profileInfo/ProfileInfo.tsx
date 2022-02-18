// import React from 'react'
// import {ProfileType} from "store/reducers/ProfileReducer";
// import avatarDefault from 'assets/img/defaultAvatar.png'
// import {ProfileStatus} from "./ProfileStatus";
//
// type ProfileInfoPropsType = {
//     profile: ProfileType
//     status: string
//     updateStatus: (userId: string) => void
// }
//
// export const profileInfo = ({profile, status, updateStatus}:ProfileInfoPropsType) => {
//
//     return (
//         <div>
//             <div className={s.content}><img alt=''
//                                             src='https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1'/>
//             </div>
//             <div className={s.avatar}><img alt=''
//                                            src={profile && profile.photos.large !== null ? profile.photos.large : avatarDefault}/>
//                <div style={{ padding: '20px', textAlign:'center'}}> {profile && profile.fullName}</div>
//                 <ProfileStatus status={status} updateStatus={updateStatus}/>
//             </div>
//         </div>
//     )
// }


import { PureComponent, ReactElement } from 'react';
import style from './ProfileInfo.module.scss';

import avatarDefault from 'assets/img/defaultAvatar.png';
import { ProfileStatus } from '.';
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
          <img
            alt=""
            src="https://avatars.mds.yandex.net/i?id=75bae0e0a804a62292113859543685a3-3743543-images-thumbs&n=13&exp=1"
          />
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
