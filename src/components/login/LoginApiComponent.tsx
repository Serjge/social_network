import { PureComponent, ReactElement } from 'react';

import { Login } from '.';

export type mapStateToPropsType = {
  isAuth: boolean;
};
type mapDispatchToPropsType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
export type LoginApiComponentPropsType = mapStateToPropsType & mapDispatchToPropsType;

export class LoginApiComponent extends PureComponent<
  LoginApiComponentPropsType,
  LoginApiComponentPropsType
> {
  render(): ReactElement {
    const { login, isAuth } = this.props;
    return <Login login={login} isAuth={isAuth} />;
  }
}
