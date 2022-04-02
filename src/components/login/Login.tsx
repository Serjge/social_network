import { PureComponent, ReactElement } from 'react';

import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import style from './login.module.scss';
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
      <div className={style.wrapper}>
        <h1 className={style.title}> LOGIN </h1>
        <p>
          To log in get registered:{' '}
          <a
            className={style.link}
            href="https://social-network.samuraijs.com/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
        <ReduxLoginForm onSubmit={onSubmit} />
      </div>
    );
  }
}
