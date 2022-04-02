import { PureComponent, ReactElement } from 'react';

import { Field, InjectedFormProps } from 'redux-form';

import style from './login.module.scss';

import { Input } from 'components/common';
import { maxLengthCreator, requiredField } from 'utils';

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const lengthText = 30;
const maxLength30 = maxLengthCreator(lengthText);

export class LoginForm extends PureComponent<InjectedFormProps<FormDataType>> {
  render(): ReactElement {
    const { handleSubmit, error } = this.props;
    return (
      <form className={style.wrapper} onSubmit={handleSubmit}>
        <div className={style.wrapper__field}>
          <Field
            placeholder="Login"
            name="email"
            type="text"
            component={Input}
            validate={[requiredField, maxLength30]}
          />
        </div>
        <div className={style.wrapper__field}>
          <Field
            placeholder="Password"
            name="password"
            type="password"
            component={Input}
            validate={[requiredField, maxLength30]}
          />
        </div>
        <div className={style.wrapper__field}>
          <Field type="checkbox" name="rememberMe" component="input" />
          remember me
        </div>
        <button className={style.button} type="submit">
          Login
        </button>
        {error ? <div>{error}</div> : null}
      </form>
    );
  }
}
