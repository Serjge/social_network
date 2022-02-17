import { TextArea } from 'components/common/forms/FormsControls/TextArea';
import { PostMap } from './Post/PostMap';
import { MyPostsPropsType } from './MyPostsContainer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from 'utils/validator/validator';
import { ComponentType, PureComponent, useCallback } from 'react';

export class MyPosts extends PureComponent<MyPostsPropsType> {
  render() {

    const {
      addPost,
      onClickRemovePost,
      onClickLike,
      posts,
    } = this.props;

    const onAddNewPostHandler = (formData: newMyPostDataType) => {
      addPost(formData.newMyPost)
    }

    return (
      <div style={ { display: 'block', marginTop: '120px' } }>
        <ReduxNewMyPosts onSubmit={ onAddNewPostHandler }/>
        <div>
          <PostMap onClickLike={ onClickLike }
                   posts={ posts }
                   onClickRemovePost={ onClickRemovePost }
          />
        </div>
      </div>
    )
  }
}


type newMyPostDataType = {
  newMyPost: string
}

const NewMyPosts: ComponentType<InjectedFormProps<newMyPostDataType>> = (props) => {

  const maxLength10 = useCallback(maxLengthCreator(10), [ maxLengthCreator ])

  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field type={ 'text' }
               component={ TextArea }
               name={ 'newMyPost' }
               validate={ [ requiredField, maxLength10 ] }
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const ReduxNewMyPosts = reduxForm<newMyPostDataType>({ form: 'newMyPosts' })(NewMyPosts)


// export class MyPosts extends PureComponent<MyPostsPropsType,MyPostsPropsType> {
//
//   shouldComponentUpdate(nextProps: Readonly<MyPostsPropsType>, nextState: Readonly<MyPostsPropsType>, nextContext: any): boolean {
//     return this.props !== nextProps || this.state !== nextState
//   }
//
//   render() {
//     console.log('render myPost')
//     const onAddNewPostHandler = (formData: newMyPostDataType) => {
//       this.props.addPost(formData.newMyPost)
// }