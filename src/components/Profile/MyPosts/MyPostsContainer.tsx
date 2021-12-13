import React, {ChangeEvent, useState} from 'react'
import {StoreType} from "../../../Redux/State";
import {AddLikeAC, addPostAC, ChangeNewTextAC, RemovePostAC} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = ({store}: MyPostsPropsType) => {
    const state = store.getState()

    let [error, setError] = useState<string>('')

    const onAddPost = () => {
        if (state.profilePage.messageForNewPost.trim() !== '') {
            store.dispatch(addPostAC(state.profilePage.messageForNewPost))
            store.dispatch(ChangeNewTextAC(''))
        } else {
            setError(' поле должно быть заполне')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if (e.currentTarget.value !== '') {
            setError('')
        }
        store.dispatch(ChangeNewTextAC(e.currentTarget.value))
    }
    const onClickRemovePost = (idPost: string) => {
        store.dispatch(RemovePostAC(idPost))
    }
    const onClickLike = (idPost: string, isLike: boolean) => {
        !isLike
            ? store.dispatch(AddLikeAC(idPost, true))
            : store.dispatch(AddLikeAC(idPost, false))
    }

    return (
        <MyPosts messageForNewPost={state.profilePage.messageForNewPost}
                 posts={state.profilePage.posts}
                 addPost={onAddPost}
                 onChangeHandler={onChangeHandler}
                 onClickLike={onClickLike}
                 onClickRemovePost={onClickRemovePost}
                 error={error}
        />
    )
}
