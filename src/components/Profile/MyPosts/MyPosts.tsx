import React from 'react'
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/State";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postElements = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div>
            My post
            <div>
                New post
                {postElements}
            </div>
        </div>
    )
}
