import React from 'react'
import style from './Post.module.scss'

type PostPropsType = {
    message: string
    likeCount: number
    removePost: (id: string) => void
    id: string
    isLike: boolean
    likeAdd: (id: string, isDone: boolean) => void
}

export const Post = (props: PostPropsType) => {

    const onClickRemovePost = () => {  //функция удаления поста
        props.removePost(props.id)
    }
    const onClickLike = () => {
        props.isLike === false ? props.likeAdd(props.id, true) : props.likeAdd(props.id, false)

    }
    const classNameLike = ` ${style.like} ${props.isLike === true ? style.likeActive : ''}`

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
