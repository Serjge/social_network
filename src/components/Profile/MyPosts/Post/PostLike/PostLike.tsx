import React from "react";
import style from "../Post.module.scss";

type PostLikePropsType = {
    like: number
    isDone: boolean
    likeAdd: (id: string, isDone: boolean) => void
    id: string
}

export const PostLike = (props: PostLikePropsType) => {
    const onClickLike = () => {
        if (props.isDone === false) {
            props.likeAdd(props.id, true)
        } else {
            props.likeAdd(props.id, false)
        }
    }

    return (
        <>
            <span className={style.like}>♥ {props.like}</span>
            <button aria-pressed={props.isDone} onChange={(e) => {
                let newIsDoneValue = JSON.parse(e.currentTarget.ariaPressed)
                props.likeAdd(props.id, newIsDoneValue)
            }} onClick={onClickLike}>+
            </button>
        </>
    )
}