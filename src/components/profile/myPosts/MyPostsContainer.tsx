// import {
//     AddLike,
//     addPost,
//     InitialProfileStateType,
//     PostsType,
//     RemovePost,
// } from 'store/reducers/ProfileReducer';
// import {AppStateType} from "store/store";
// import {Dispatch} from "redux";
// import {connect} from "react-redux";
//
// type mapStateToPropsType = {
//     posts: PostsType[]
// }
//
// type mapDispatchToPropsType = {
//     addPost: (newText: string) => void
//     onClickRemovePost: (idPost: string) => void
//     onClickLike: (idPost: string, isLike: boolean) => void
// }
//
// export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         posts: state.profilePage.posts,
//
//     }
// }
//
// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         addPost: (newText: string) => {
//             dispatch(addPost(newText))
//         },
//         onClickRemovePost: (idPost: string) => {
//             dispatch(RemovePost(idPost))
//         },
//         onClickLike: (idPost: string, isLike: boolean) => {
//             !isLike
//                 ? dispatch(AddLike(idPost, true))
//                 : dispatch(AddLike(idPost, false))
//         }
//     }
// }
//
// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(myPosts)


import { connect } from 'react-redux';
import { Dispatch } from 'redux';


import { AppStateType } from 'store';
import { addLike, addPost, removePost } from 'store/actions';
import { PostsType } from 'type';
import { MyPosts } from './MyPosts';


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
