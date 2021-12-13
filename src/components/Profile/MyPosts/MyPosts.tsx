import React, {ChangeEvent} from 'react'
import {PostsType} from "../../../Redux/State";
import {PostMap} from './Post/PostMap';

type MyPostsPropsType = {
    addPost: () => void
    onChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void
    posts: PostsType[]
    messageForNewPost: string
    onClickRemovePost: (idPost: string) => void
    onClickLike: (idPost: string, isLike: boolean) => void
    error: string
}

export const MyPosts = (props: MyPostsPropsType) => {

    const disableButton = props.messageForNewPost === ''

    return (
        <div>
            <div>
                <textarea value={props.messageForNewPost}
                          onChange={props.onChangeHandler}/>
                <span>{props.error}</span>
            </div>
            <div>
                <button disabled={disableButton} onClick={props.addPost}>Add post</button>
            </div>
            <div>
                <PostMap onClickLike={props.onClickLike}
                         posts={props.posts}
                         onClickRemovePost={props.onClickRemovePost}/>
            </div>
        </div>
    )
}
