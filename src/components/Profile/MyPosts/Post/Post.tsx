import React from 'react'
import style from './Post.module.scss'
import {PostLike} from "./PostLike/PostLike";

type PostPropsType = {

    message: string
    likeCount: number
    removePost: (id: string) => void
    id: string
    isDone: boolean
    likeAdd: (id: string, isDone: boolean) => void
}

export const Post = (props: PostPropsType) => {
    console.log('render Post')

    const onClickRemovePost = () => {  //функция удаления поста
        props.removePost(props.id)
    }

    return (
        <div className={style.post}>
            <div className={style.item}>
                <img alt='' src='https://randomuser.me/api/portraits/women/57.jpg'/>
                {props.message}
                <button onClick={onClickRemovePost}>x</button>
                <div>
                    <PostLike id={props.id} likeAdd={props.likeAdd} isDone={props.isDone} like={props.likeCount}/>
                </div>
            </div>
        </div>
    )
}
