import { PureComponent, ReactElement } from 'react';

import { Post } from '.';

import { PostsType } from 'type';

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
