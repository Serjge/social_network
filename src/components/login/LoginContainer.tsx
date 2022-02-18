// import {connect} from "react-redux";
// import {login} from "store/reducers/AuthReducer";
// import {AppStateType} from "store/store";
// import React from "react";
// import {Login} from "./Login";
//
// type mapStateToPropsType = {
//     isAuth: boolean
// }
// type mapDispatchToPropsType = {
//     login: (email: string, password: string, rememberMe: boolean) => void
// }
// export type LoginApiComponentPropsType = mapStateToPropsType & mapDispatchToPropsType
//
// export class LoginApiComponent extends React.Component<LoginApiComponentPropsType, LoginApiComponentPropsType> {
//
//     render() {
//         return (
//             <Login {...this.props} />
//         );
//     }
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//     return {
//         isAuth: state.authPage.isAuth,
//     }
// }
//
// export const LoginContainer =
//     connect(mapStateToProps, {login,})(LoginApiComponent)

import { connect } from 'react-redux';
import { AppStateType } from 'store';
import { login } from 'store/reducers/AuthReducer';
import { LoginApiComponent, mapStateToPropsType } from './LoginApiComponent';



const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.authPage.isAuth,
});

export const LoginContainer = connect(mapStateToProps, { login })(LoginApiComponent);
