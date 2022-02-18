// import { Field, InjectedFormProps, reduxForm } from 'redux-form';
// import { maxLengthCreator, requiredField } from 'utils';
// import { Navigate } from 'react-router-dom';
// import { Input } from 'components/common/forms/formsControls/Input';
//
// type LoginPropsType = {
//   login: (email: string, password: string, rememberMe: boolean) => void
//   isAuth: boolean
// }
// export const Login = ({ login, isAuth }: LoginPropsType) => {
//
//   const onSubmit = (formData: FormDataType) => {
//     login(formData.email, formData.password, formData.rememberMe)
//   }
//
//   if (isAuth) {
//     return <Navigate to={ '/profile' }/>
//   }
//
//   return (
//     <>
//       <h1> LOGIN </h1>
//       <ReduxLoginForm onSubmit={ onSubmit }/>
//     </>
//   );
// };
//
// type FormDataType = {
//   email: string
//   password: string
//   rememberMe: boolean
// }
//
// const maxLength30 = maxLengthCreator(30)
//
// export const LoginForm: React.ComponentType<InjectedFormProps<FormDataType>> = (props) => {
//
//   return (
//     <form onSubmit={ props.handleSubmit }>
//       <div>
//         <Field placeholder={ 'Login' }
//                name={ 'email' }
//                type="text"
//                component={ Input }
//                validate={ [ requiredField, maxLength30 ] }
//         />
//       </div>
//       <div>
//         <Field placeholder={ 'Password' }
//                name={ 'password' }
//                type="password"
//                component={ Input }
//                validate={ [ requiredField, maxLength30 ] }
//         />
//       </div>
//       <div>
//         <Field type="checkbox"
//                name={ 'rememberMe' }
//                component={ 'input' }/>
//         remember me
//       </div>
//       <button>Login</button>
//       { props.error
//         ? <div>
//           { props.error }
//         </div>
//         : null }
//     </form>
//   );
// };
//
// const ReduxLoginForm = reduxForm<FormDataType>({
//   form: 'login',
// })(LoginForm)

import { PureComponent, ReactElement } from 'react';

import { Navigate } from 'react-router-dom';
import { reduxForm } from 'redux-form';
import { FormDataType, LoginForm } from './LoginForm';



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
      return <Navigate to="/profile" />;
    }

    return (
      <>
        <h1> LOGIN </h1>
        <ReduxLoginForm onSubmit={onSubmit} />
      </>
    );
  }
}
