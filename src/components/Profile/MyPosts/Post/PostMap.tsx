import {Post} from "./Post";
import {PostsType} from "../../../../Redux/State";
import React from "react";

type PostMapPropsType = {
    posts: PostsType[]
    onClickRemovePost: (idPost:string) => void
    onClickLike: (idPost: string, isLike:boolean) => void
}

export const PostMap = ({posts, onClickRemovePost, onClickLike}: PostMapPropsType) => {
    return (<>
        {posts.map(p => {
            return (
                <Post key={p.id}
                      message={p.message}
                      likeCount={p.likeCount}
                      id={p.id}
                      isLike={p.isLike}
                      onClickRemovePost={onClickRemovePost}
                      onClickLike={onClickLike}
                />
            )
        })}
    </>)
}