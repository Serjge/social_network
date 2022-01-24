import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
}

export const Profile = ({profile, status}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status}/>
            <MyPostsContainer />
        </div>
    )
}
