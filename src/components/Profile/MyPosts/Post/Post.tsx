import React from 'react'
import style from './Post.module.scss'
import {ActionsType, AddLikeAC, RemovePostAC} from "../../../../Redux/State";

type PostPropsType = {
    message: string
    likeCount: number
    id: string
    isLike: boolean
    dispatch: (action: ActionsType) => void
}

export const Post = (props: PostPropsType) => {

    const onClickRemovePost = () => {
        props.dispatch(RemovePostAC(props.id))
    }
    const onClickLike = () => {
        !props.isLike
            ? props.dispatch(AddLikeAC(props.id, true))
            : props.dispatch(AddLikeAC(props.id, false))
    }
    const classNameLike = ` ${style.like} ${props.isLike ? style.likeActive : ''}`

    return (
        <div className={style.post}>
            <div className={style.item}>
                <img alt='' src='https://randomuser.me/api/portraits/women/57.jpg'/>
                {props.message}
                <button onClick={onClickRemovePost}>x</button>
                <div>
                    <span onClick={onClickLike} className={classNameLike}>♥{props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
