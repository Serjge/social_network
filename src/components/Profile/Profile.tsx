import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profileDate: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    console.log('render profile')
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profileDate={props.profileDate}/>
        </div>
    )
}
