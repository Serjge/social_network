// import React from "react";
// import {PostsType} from "store/reducers/ProfileReducer";
//
// type PostMapPropsType = {
//     posts: PostsType[]
//     onClickRemovePost: (idPost:string) => void
//     onClickLike: (idPost: string, isLike:boolean) => void
// }
//
// export const PostMap = ({posts, onClickRemovePost, onClickLike}: PostMapPropsType) => {
//     return (<>
//         {posts.map(p => {
//             return (
//                 <post key={p.id}
//                       message={p.message}
//                       likeCount={p.likeCount}
//                       id={p.id}
//                       isLike={p.isLike}
//                       onClickRemovePost={onClickRemovePost}
//                       onClickLike={onClickLike}
//                 />
//             )
//         })}
//     </>)
// }

import { PureComponent, ReactElement } from 'react';
import { PostsType } from 'type';

import { Post } from '.';



type PostMapPropsType = {
    posts: PostsType[];
    onClickRemovePost: (idPost: string) => void;
    onClickLike: (idPost: string, isLike: boolean) => void;
};

export class PostMap extends PureComponent<PostMapPropsType> {
    render(): ReactElement {
        const { posts, onClickRemovePost, onClickLike } = this.props;
        return (
          <>
              {posts.map(({ id, likeCount, isLike, message }) => (
                <Post
                  key={id}
                  message={message}
                  likeCount={likeCount}
                  id={id}
                  isLike={isLike}
                  onClickRemovePost={onClickRemovePost}
                  onClickLike={onClickLike}
                />
              ))}
          </>
        );
    }
}
