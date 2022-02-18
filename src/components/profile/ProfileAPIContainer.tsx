import { Component, ReactElement } from 'react';


import { InjectedProps } from 'hoc';
import { ProfileType } from 'store/reducers/ProfileReducer';
import { Profile } from '.';


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
};

export type ProfileAPIContainerPropsType = mapStateToPropsType &
  mapDispatchToPropsType &
  InjectedProps;

export class ProfileAPIContainer extends Component<ProfileAPIContainerPropsType> {
  componentDidMount(): void {
    const { authUserId, requestProfile, requestStatus } = this.props;
    let { userId } = this.props;

    if (!userId) {
      userId = authUserId;
    }
    requestProfile(userId);
    requestStatus(userId);
  }

  render(): ReactElement {
    const { profile, status, updateStatus } = this.props;
    return <Profile profile={profile} status={status} updateStatus={updateStatus} />;
  }
}
