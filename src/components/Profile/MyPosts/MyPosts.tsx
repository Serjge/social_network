import React from 'react'
import {PostMap} from './Post/PostMap';
import {MyPostsPropsType} from "./MyPostsContainer";

export const MyPosts = (props: MyPostsPropsType) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>)=> {
        props.onChangeHandler(e.currentTarget.value)
    }

    return (
        <div style={{display:'block', marginTop: '40px'}}>
            <div>
                <textarea value={props.profilePage.messageForNewPost}
                          onChange={onChangeHandler}/>
            </div>
            <div>
                <button disabled={props.profilePage.messageForNewPost.trim()===''} onClick={props.addPost}>Add post</button>
            </div>
            <div>
                <PostMap onClickLike={props.onClickLike}
                         posts={props.profilePage.posts}
                         onClickRemovePost={props.onClickRemovePost}/>
            </div>
        </div>
    )
}
