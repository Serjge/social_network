import React, {ChangeEvent, useState} from 'react'
import {Post} from "./Post/Post";
import {ActionsType, addPostAC, ChangeNewTextAC, ProfilePageType, store} from "../../../Redux/State";

type MyPostsPropsType = {
    profileDate: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let [error, setError] = useState<string>('')

    const postElements = props.profileDate.posts.map(p => {
        return (
            <Post key={p.id}
                  message={p.message}
                  likeCount={p.likeCount}
                  id={p.id}
                  isLike={p.isLike}
                  dispatch={props.dispatch.bind(store)}
            />
        )
    })

    const addPost = () => {
        if (props.profileDate.messageForNewPost.trim() !== '') {
            props.dispatch(addPostAC(props.profileDate.messageForNewPost))
            props.dispatch(ChangeNewTextAC( ''))
        } else {
            setError(' поле должно быть заполнено')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== '') {
            setError('')
        }
        props.dispatch(ChangeNewTextAC (e.currentTarget.value))
    }
    const disableButton = props.profileDate.messageForNewPost === ''


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
