import { PureComponent, ReactElement } from 'react';

import { MyPostsContainer, ProfileInfo } from '.';

import { ProfileType } from 'type';

type ProfilePropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (userId: string) => void;
  isOwner: boolean;
  savePhoto: (file: string | Blob) => void;
};

export class Profile extends PureComponent<ProfilePropsType> {
  render(): ReactElement {
    const { profile, status, updateStatus, isOwner, savePhoto } = this.props;

    return (
      <div>
        <ProfileInfo
          isOwner={isOwner}
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          savePhoto={savePhoto}
        />
        <MyPostsContainer />
      </div>
    );
  }
}
