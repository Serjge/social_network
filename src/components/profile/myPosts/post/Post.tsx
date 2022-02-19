import { PureComponent, ReactElement } from 'react';

import style from './Post.module.scss';

type PostPropsType = {
  message: string;
  likeCount: number;
  id: string;
  isLike: boolean;
  onClickRemovePost: (idPost: string) => void;
  onClickLike: (idPost: string, isLike: boolean, likeCount: number) => void;
};

export class Post extends PureComponent<PostPropsType> {
  render(): ReactElement {
    const { isLike, onClickLike, onClickRemovePost, likeCount, id, message } = this.props;

    const classNameLike = ` ${style.like} ${isLike ? style.likeActive : ''}`;

    return (
      <div className={style.post}>
        <div className={style.item}>
          <img alt="" src="https://randomuser.me/api/portraits/women/57.jpg" />
          {message}
          <button
            type="button"
            onClick={() => onClickRemovePost(id)}
            className={style.like}
          >
            x
          </button>
          <div>
            <button
              type="button"
              onClick={() => onClickLike(id, isLike, likeCount)}
              className={classNameLike}
            >
              ♥{likeCount}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
