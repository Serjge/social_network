import React from 'react'
import s from './Post.module.scss'

type PostPropsType = {
    message: string
    likeCount: number
}

export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img  alt='' src='https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg'/>
                {props.message}
                <div>
                    <span>like {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
