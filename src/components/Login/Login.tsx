import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from 'utils';
import { Navigate } from 'react-router-dom';
import { Input } from 'components/common/forms/FormsControls/TextArea';

type LoginPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}
export const Login = ({ login, isAuth }: LoginPropsType) => {

  const onSubmit = (formData: FormDataType) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) {
    return <Navigate to={ '/profile' }/>
  }

  return (
    <>
      <h1> LOGIN </h1>
      <ReduxLoginForm onSubmit={ onSubmit }/>
    </>
  );
};

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30)

export const LoginForm: React.ComponentType<InjectedFormProps<FormDataType>> = (props) => {

  return (
    <form onSubmit={ props.handleSubmit }>
      <div>
        <Field placeholder={ 'Login' }
               name={ 'email' }
               type="text"
               component={ Input }
               validate={ [ requiredField, maxLength30 ] }
        />
      </div>
      <div>
        <Field placeholder={ 'Password' }
               name={ 'password' }
               type="password"
               component={ Input }
               validate={ [ requiredField, maxLength30 ] }
        />
      </div>
      <div>
        <Field type="checkbox"
               name={ 'rememberMe' }
               component={ 'input' }/>
        remember me
      </div>
      <button>Login</button>
      { props.error
        ? <div>
          { props.error }
        </div>
        : null }
    </form>
  );
};

const ReduxLoginForm = reduxForm<FormDataType>({
  form: 'login',
})(LoginForm)