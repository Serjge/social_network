import {
    AddLike,
    addPost,
    InitialProfileStateType,
    PostsType,
    RemovePost,
} from 'store/reducers/ProfileReducer';
import {MyPosts} from "./MyPosts";
import {AppStateType} from "store/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType = {
    posts: PostsType[]
}

type mapDispatchToPropsType = {
    addPost: (newText: string) => void
    onClickRemovePost: (idPost: string) => void
    onClickLike: (idPost: string, isLike: boolean) => void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,

    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        addPost: (newText: string) => {
            dispatch(addPost(newText))
        },
        onClickRemovePost: (idPost: string) => {
            dispatch(RemovePost(idPost))
        },
        onClickLike: (idPost: string, isLike: boolean) => {
            !isLike
                ? dispatch(AddLike(idPost, true))
                : dispatch(AddLike(idPost, false))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
