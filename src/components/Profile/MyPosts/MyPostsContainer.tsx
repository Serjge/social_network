import {
    AddLikeAC,
    addPostAC,
    ChangeNewTextAC,
    InitialProfileStateType,
    RemovePostAC
} from '../../../Redux/ProfileReducer';
import {MyPosts} from "./MyPosts";
import {AppStateType} from "../../../Redux/redux_store";
import {Dispatch} from "redux";
import {connect} from "react-redux";

type mapStateToPropsType ={
    profilePage: InitialProfileStateType
}

type mapDispatchToPropsType = {
    addPost:()=>void
    onChangeHandler: (text:string)=> void
    onClickRemovePost: (idPost: string)=> void
    onClickLike: (idPost: string, isLike: boolean)=> void
}

export type MyPostsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
            dispatch(ChangeNewTextAC(''))
        },
        onChangeHandler: (text:string) => {
            dispatch(ChangeNewTextAC(text))
        },
        onClickRemovePost: (idPost: string) => {
            dispatch(RemovePostAC(idPost))
        },
        onClickLike: (idPost: string, isLike: boolean) => {
            !isLike
                ? dispatch(AddLikeAC(idPost, true))
                : dispatch(AddLikeAC(idPost, false))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
