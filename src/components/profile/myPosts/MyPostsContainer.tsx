import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { MyPosts } from './MyPosts';

import { AppStateType } from 'store';
import { addLike, addPost, removePost } from 'store/actions';
import { PostsType } from 'type';

type mapStateToPropsType = {
  posts: PostsType[];
};

type mapDispatchToPropsType = {
  addPost: (newText: string) => void;
  onClickRemovePost: (idPost: string) => void;
  onClickLike: (idPost: string, isLike: boolean) => void;
};

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  posts: state.profilePage.posts,
});

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => ({
  addPost: (newText: string) => {
    dispatch(addPost(newText));
  },

  onClickRemovePost: (idPost: string) => {
    dispatch(removePost(idPost));
  },

  onClickLike: (idPost: string, isLike: boolean) => {
    if (!isLike) dispatch(addLike(idPost, true));
    else dispatch(addLike(idPost, false));
  },
});

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
