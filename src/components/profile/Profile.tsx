import { PureComponent, ReactElement } from 'react';

import { MyPostsContainer, ProfileInfo } from '.';

import { ProfileType } from 'type';

type ProfilePropsType = {
  profile: ProfileType;
  status: string;
  updateStatus: (userId: string) => void;
};

export class Profile extends PureComponent<ProfilePropsType> {
  render(): ReactElement {
    const { profile, status, updateStatus } = this.props;
    return (
      <div>
        <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
        <MyPostsContainer />
      </div>
    );
  }
}
