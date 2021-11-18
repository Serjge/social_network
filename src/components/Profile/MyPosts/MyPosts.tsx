import React, {useState, ChangeEvent} from 'react'
import s from './MyPosts.module.scss'
import {Post} from "./Post/Post";
import {PostsType} from "../../../Redux/State";

type MyPostsPropsType = {

    addPost: (post: string) => void
    post: PostsType[]
}

export const MyPosts = (props: MyPostsPropsType) => {
    let [post, setPost] = useState<string>('')
        let [error, setError] = useState<string>('')

    let postElements = props.post.map(p => (<Post  message={p.message} likeCount={p.likeCount}/>))

    const addPost = () => {
        if (post.trim() !== '') {
            props.addPost(post)
            setPost('')
        } else {
            setError(' поле должно быть заполнено')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPost(e.currentTarget.value)
        setError('')
    }

    return (
        <div>
            <div>
                <textarea value={post} onChange={onChangeHandler}></textarea><span>{error}</span>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>

            </div>

            <div>
                {postElements}
            </div>
        </div>
    )
}
