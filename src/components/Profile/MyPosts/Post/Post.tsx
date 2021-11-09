import React from 'react'
import c from './Post.module.scss'

type PostPropsType = {
    message: string
    likeCount: number
}


const Post = (props: PostPropsType) => {
    return (
        <div className={c.post}>
            <div className={c.item}>
                <img  alt='' src='https://avatarko.ru/img/kartinka/1/pozitiv_smailik.jpg'/>
                {props.message}
                <div>
                    <span>like {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}
export default Post