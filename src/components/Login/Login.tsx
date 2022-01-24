import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const Login = () => {

    const onSubmit =(formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <>
            <h1>
                LOGIN
            </h1>
    <ReduxLoginForm onSubmit={onSubmit}/>
        </>
    );
};

type FormDataType = {
    login:string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.ComponentType<InjectedFormProps<FormDataType>> = (props) => {
    console.log('ren')

    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder={'Login'} name={'login'} type="text" component={'input'}/></div>
            <div><Field placeholder={'Password'} name={'password'} type="text" component={'input'}/></div>
            <div><Field  type="checkbox" name={'rememberMe'} component={'input'}/> remember me</div>
            <button>Login</button>
        </form>
    );
};

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)