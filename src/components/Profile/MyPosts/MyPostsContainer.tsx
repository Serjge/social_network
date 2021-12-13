import React, {ChangeEvent, useState} from 'react'
import {StoreType} from "../../../Redux/State";
import {AddLikeAC, addPostAC, ChangeNewTextAC, RemovePostAC} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./MyPosts";
import {StoreContext} from '../../../Redux/StoreContext';

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = () => {
    let [error, setError] = useState<string>('')

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()



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

                    return <MyPosts messageForNewPost={state.profilePage.messageForNewPost}
                                    posts={state.profilePage.posts}
                                    addPost={onAddPost}
                                    onChangeHandler={onChangeHandler}
                                    onClickLike={onClickLike}
                                    onClickRemovePost={onClickRemovePost}
                                    error={error}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}