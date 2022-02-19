import { ComponentType, PureComponent, ReactElement } from 'react';

import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { MyPostsPropsType } from './MyPostsContainer';
import { PostMap } from './post';

import { TextArea } from 'components';
import { maxLengthCreator, requiredField } from 'utils';

type newMyPostDataType = {
  newMyPost: string;
};

const lengthText = 10;

const maxLength10 = maxLengthCreator(lengthText);

const NewMyPosts: ComponentType<InjectedFormProps<newMyPostDataType>> = ({
  handleSubmit,
}: InjectedFormProps<newMyPostDataType>) => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        type="text"
        component={TextArea}
        name="newMyPost"
        validate={[requiredField, maxLength10]}
      />
    </div>
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button>Add post</button>
    </div>
  </form>
);

const ReduxNewMyPosts = reduxForm<newMyPostDataType>({ form: 'newMyPosts' })(NewMyPosts);

export class MyPosts extends PureComponent<MyPostsPropsType> {
  render(): ReactElement {
    const { addPost, onClickRemovePost, onClickLike, posts } = this.props;

    const onAddNewPostHandler = (formData: newMyPostDataType): void => {
      addPost(formData.newMyPost);
    };

    return (
      <div style={{ display: 'block', marginTop: '120px' }}>
        <ReduxNewMyPosts onSubmit={onAddNewPostHandler} />
        <div>
          <PostMap
            onClickLike={onClickLike}
            posts={posts}
            onClickRemovePost={onClickRemovePost}
          />
        </div>
      </div>
    );
  }
}
