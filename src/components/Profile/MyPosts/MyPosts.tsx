import {PostMap} from './Post/PostMap';
import {MyPostsPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validator/validator";
import {TextArea} from "../../common/forms/FormsControls/TextArea";
import {ComponentType} from "react";

export const MyPosts = ({addPost, onClickRemovePost, onClickLike, profilePage}: MyPostsPropsType) => {

    const onAddNewPostHandler = (formData: newMyPostDataType) => {
        addPost(formData.newMyPost)
    }

    return (
        <div style={{display: 'block', marginTop: '120px'}}>
            <ReduxNewMyPosts onSubmit={onAddNewPostHandler}/>
            <div>
                <PostMap onClickLike={onClickLike}
                         posts={profilePage.posts}
                         onClickRemovePost={onClickRemovePost}
                />
            </div>
        </div>
    )
}

type newMyPostDataType = {
    newMyPost: string
}

const maxLength10 = maxLengthCreator(10)

const NewMyPosts: ComponentType<InjectedFormProps<newMyPostDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type={'text'}
                       component={TextArea}
                       name={'newMyPost'}
                       validate={[requiredField, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    );
};

const ReduxNewMyPosts = reduxForm<newMyPostDataType>({form: 'newMyPosts'})(NewMyPosts)
