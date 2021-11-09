import React from 'react'
import c from './MyPosts.module.scss'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My post
            <div>
                New post
                <Post message={`Hi, how are you?`} likeCount={10}/>
                <Post message={`It's my first post`} likeCount={50}/>
            </div>
        </div>
    )
}
export default MyPosts