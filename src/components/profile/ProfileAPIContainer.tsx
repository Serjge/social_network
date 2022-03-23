import { Component, ReactElement } from 'react';

import { Profile } from 'components';
import { InjectedProps } from 'hoc';
import { ProfileType } from 'type';

export type mapStateToPropsType = {
  profile: ProfileType;
  status: string;
  authUserId: string;
};
type mapDispatchToPropsType = {
  addPost: (newText: string) => void;
  RemovePost: (removeId: string) => void;
  AddLike: (LikeId: string, isLike: boolean) => void;
  requestProfile: (userId: string) => void;
  requestStatus: (userId: string) => void;
  updateStatus: (userId: string) => void;
  savePhoto: (file: string | Blob) => void;
};

export type ProfileAPIContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType &
  InjectedProps;

export class ProfileAPIContainer extends Component<ProfileAPIContainerPropsType> {
  componentDidMount(): void {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps: Readonly<ProfileAPIContainerPropsType>): void {
    const { userId } = this.props;
    const { userId: prevUserId } = prevProps;

    if (userId !== prevUserId) {
      this.refreshProfile();
    }
  }

  refreshProfile = (): void => {
    const { authUserId, requestProfile, requestStatus } = this.props;
    let { userId } = this.props;

    if (!userId) {
      userId = authUserId;
    }
    requestProfile(userId);
    requestStatus(userId);
  };

  render(): ReactElement {
    const { profile, status, updateStatus, userId, savePhoto } = this.props;

    return (
      <Profile
        isOwner={!userId}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
      />
    );
  }
}
