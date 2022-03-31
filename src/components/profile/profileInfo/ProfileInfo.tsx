import { ChangeEvent, PureComponent, ReactElement } from 'react';

import style from './ProfileInfo.module.scss';

import avatarDefault from 'assets/img/defaultAvatar.png';
import background from 'assets/img/profileBackground.webp';
import { ProfileStatus } from 'components';
import { Contact } from 'components/profile/profileInfo/Contact';
import { ContactsType, ProfileType } from 'type';

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
      lookingForAJob,
      lookingForAJobDescription,
      contacts,
      aboutMe,
    } = profile;

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files!.length) {
        savePhoto(e.target.files![ZERO_FILE]);
      }
    };

    let arrayContacts = Object.keys({} as ContactsType) as Array<keyof ContactsType>;

    if (contacts) {
      arrayContacts = Object.keys(contacts) as Array<keyof ContactsType>;
    }

    return (
      <div>
        <div className={style.content}>
          <img alt="" src={background} />
        </div>

        <div className={style.avatar}>
          <img alt="" src={profile && large ? large : avatarDefault} />
          {isOwner && <input onChange={onMainPhotoSelected} type="file" />}
        </div>
        <div>
          <div style={{ padding: '20px' }}>{profile && fullName}</div>
        </div>

        <div>
          <div>
            <div>
              <b>Full Name: </b>: {fullName}
            </div>
            <div>
              <b>Looking for job</b>: {lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>
              <b>My Professional skills</b>
              {lookingForAJob && lookingForAJobDescription}
            </div>
          </div>
          <div>
            <div>
              <b>About me:</b> {aboutMe}
            </div>
            <b>Contacts:</b>
            {arrayContacts.map(key => (
              <Contact key={key} contactTitle={key} contactValue={contacts[key]} />
            ))}
          </div>
          <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
        </div>
      </div>
    );
  }
}
