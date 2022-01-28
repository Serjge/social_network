import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/forms/FormsControls/TextArea";
import {maxLengthCreator, requiredField} from "../../utils/validator/validator";
import {Navigate} from "react-router-dom";

type LoginPropsType = {
    login: (email: string,password: string,rememberMe:boolean) => void
    error:string
    isAuth :boolean
}
export const Login = ({login, error, isAuth}:LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        login(formData.login, formData.password ,formData.rememberMe)
    }
    if(isAuth) { return <Navigate to={'/profile'}/>}
    return (
        <>

            <h1>
                LOGIN
            </h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
            {error}
        </>
    );
};

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}
const maxLength30 = maxLengthCreator(30)
export const LoginForm: React.ComponentType<InjectedFormProps<FormDataType>> = (props) => {
    console.log('ren')

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       type="text"
                       component={Input}
                       validate={[requiredField, maxLength30]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       type="text"
                       component={Input}
                       validate={[requiredField, maxLength30]}
                />
            </div>
            <div>
                <Field type="checkbox"
                       name={'rememberMe'}
                       component={'input'}/>
                remember me
            </div>
            <button>Login</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)