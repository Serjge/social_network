import React, {ChangeEvent, useState} from 'react'
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/State";

type MyPostsPropsType = {
    profileDate: ProfilePageType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (postText: string) => void
    likeAdd: (id: string, isDone: boolean) => void
    removePost: (id: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let [error, setError] = useState<string>('')
    let [disableButton, setDisableButton] = useState(true) // деланье кнопки

    const postElements = props.profileDate.posts.map(p => {
        return (
            <Post
                key={p.id}
                message={p.message}
                likeCount={p.likeCount}
                removePost={props.removePost}
                id={p.id}
                isLike={p.isLike}
                likeAdd={props.likeAdd}
            />
        )
    })

    const addPost = () => {
        if (props.profileDate.messageForNewPost.trim() !== '') {
            props.addPostCallback(props.profileDate.messageForNewPost)
            props.changeNewTextCallback('')
            setDisableButton(true)
        } else {
            setError(' поле должно быть заполнено')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value === '') {
            setDisableButton(true)
        } else {
            setDisableButton(false)
            setError('')
        }
        props.changeNewTextCallback(e.currentTarget.value)
    }

    return (
        <div>
            <div>
                <textarea value={props.profileDate.messageForNewPost}
                          onChange={onChangeHandler}/>
                <span>{error}</span>
            </div>
            <div>
                <button disabled={disableButton} onClick={addPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}
