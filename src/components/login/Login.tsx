import { PureComponent, ReactElement } from 'react';

import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import { FormDataType, LoginForm } from './LoginForm';

import { path } from 'enum';

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
  isAuth: boolean;
};

const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm);

export class Login extends PureComponent<LoginPropsType> {
  render(): ReactElement {
    const { login, isAuth } = this.props;

    const onSubmit = (formData: FormDataType): void => {
      login(formData.email, formData.password, formData.rememberMe);
    };

    if (isAuth) {
      return <Navigate to={path.profile} />;
    }

    return (
      <>
        <h1> LOGIN </h1>
        <ReduxLoginForm onSubmit={onSubmit} />
      </>
    );
  }
}
