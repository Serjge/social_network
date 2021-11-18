import React, {Dispatch, useState} from 'react'
import s from './Profile.module.scss'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../Redux/State";
import {v1} from "uuid";

type ProfilePropsType = {
    profileDate: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {

    let [posts, setPosts] = useState(props.profileDate.posts)


    function addPost(post: string) {
        let message = {id: v1(), message: post, likeCount: 0}
        let newMessage = [message, ...posts]
        setPosts(newMessage)

        console.log(posts)
    }
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={addPost} post={posts}/>
        </div>
    )
}
