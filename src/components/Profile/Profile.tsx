import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/State";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}
