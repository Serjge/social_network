import {connect} from "react-redux";
import {login} from "../../Redux/AuthReducer";
import {AppStateType} from "../../Redux/redux_store";
import React from "react";
import {Login} from "./Login";

type mapStateToPropsType = {
    error: string
    isAuth: boolean
}
type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}
export type LoginApiComponentPropsType = mapStateToPropsType & mapDispatchToPropsType

export class LoginApiComponent extends React.Component<LoginApiComponentPropsType, LoginApiComponentPropsType> {

    render() {
        return (
            <Login {...this.props} />
        );
    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        error: state.authPage.error,
        isAuth: state.authPage.isAuth,
    }
}

export const LoginContainer =
    connect(mapStateToProps, {login,})(LoginApiComponent)