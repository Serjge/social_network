import React from 'react'
import style from './Post.module.scss'

type PostPropsType = {
    message: string
    likeCount: number
    id: string
    isLike: boolean
    onClickRemovePost: (idPost:string) => void

    onClickLike: (idPost: string, isLike:boolean) =>void
}

export const Post = (props: PostPropsType) => {

    const classNameLike = ` ${style.like} ${props.isLike ? style.likeActive : ''}`

    return (
        <div className={style.post}>
            <div className={style.item}>
                <img alt='' src='https://randomuser.me/api/portraits/women/57.jpg'/>
                {props.message}
                <button onClick={()=>props.onClickRemovePost(props.id)}>x</button>
                <div>
                    <span onClick={()=>props.onClickLike(props.id, props.isLike)}
                          className={classNameLike}>♥{props.likeCount}
                    </span>
                </div>
            </div>
        </div>
    )
}
