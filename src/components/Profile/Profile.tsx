import React from 'react'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";

type ProfilePropsType = {
    profileDate: ProfilePageType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (postText: string) => void
    likeAdd: (id: string, isDone: boolean) => void
    removePost: (id: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    console.log('render profile')
    return (
        <div>
            <ProfileInfo/>
            <MyPosts removePost={props.removePost}
                     changeNewTextCallback={props.changeNewTextCallback}
                     likeAdd={props.likeAdd}
                     addPostCallback={props.addPostCallback}
                     profileDate={props.profileDate}/>
        </div>
    )
}
