import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profileDate: ProfilePageType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (postText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    console.log('render profile')
    return (
        <div>
            <ProfileInfo/>
            <MyPosts changeNewTextCallback={props.changeNewTextCallback} addPostCallback={props.addPostCallback} profileDate={props.profileDate}/>
        </div>
    )
}
