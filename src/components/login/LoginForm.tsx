import { PureComponent, ReactElement } from 'react';

import { Field, InjectedFormProps } from 'redux-form';

import { Input } from 'components/common';
import { maxLengthCreator, requiredField } from 'utils';

const lengthText = 30;
const maxLength30 = maxLengthCreator(lengthText);

export class LoginForm extends PureComponent<InjectedFormProps<FormDataType>> {
  render(): ReactElement {
    const { handleSubmit, error } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Login"
            name="email"
            type="text"
            component={Input}
            validate={[requiredField, maxLength30]}
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            name="password"
            type="password"
            component={Input}
            validate={[requiredField, maxLength30]}
          />
        </div>
        <div>
          <Field type="checkbox" name="rememberMe" component="input" />
          remember me
        </div>

        <button type="submit">Login</button>
        {error ? <div>{error}</div> : null}
      </form>
    );
  }
}

export type FormDataType = {
  email: string;
  password: string;
  rememberMe: boolean;
};
