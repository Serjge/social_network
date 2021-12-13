import React from 'react'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../Redux/State";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile = ({store}: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </div>
    )
}
