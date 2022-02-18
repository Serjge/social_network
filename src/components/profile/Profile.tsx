// import React from 'react'
// import {MyPostsContainer} from "./myPosts/MyPostsContainer";
// import {ProfileType} from "store/reducers/ProfileReducer";
// import { ProfileInfo } from '.';
//
// type ProfilePropsType = {
//     profile: ProfileType
//     status: string
//     updateStatus: (userId: string) => void
// }
//
// export const Profile = ({profile, status, updateStatus}:ProfilePropsType) => {
//     return (
//         <div>
//             <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
//             <MyPostsContainer />
//         </div>
//     )
// }
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
