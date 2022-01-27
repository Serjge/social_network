import React from 'react'
import {PostMap} from './Post/PostMap';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts = ({addPost,onClickRemovePost,onClickLike,profilePage}: MyPostsPropsType) => {

    const onAddNewPostHandler = (formData: newMyPostDataType) => {
        addPost(formData.newMyPost)
    }

    return (
        <div style={{display: 'block', marginTop: '120px'}}>
            <ReduxNewMyPosts onSubmit={onAddNewPostHandler}/>
            <div>
                <PostMap onClickLike={onClickLike}
                         posts={profilePage.posts}
                         onClickRemovePost={onClickRemovePost}/>
            </div>
        </div>
    )
}

type newMyPostDataType = {
    newMyPost: string
}

const NewMyPosts: React.ComponentType<InjectedFormProps<newMyPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'} component={'textarea'} name={'newMyPost'}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const ReduxNewMyPosts = reduxForm<newMyPostDataType>({form: 'newMyPosts'})(NewMyPosts)
