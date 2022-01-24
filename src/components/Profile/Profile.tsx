import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../Redux/ProfileReducer";

type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (userId: string) => void
}

export const Profile = ({profile, status, updateStatus}:ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}
