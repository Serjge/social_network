import { PureComponent, ReactElement } from 'react';

import { Header } from './Header';

export type mapStateToPropsType = {
  login: string;
  isFetching: boolean;
  auth: boolean;
};

type mapDispatchToPropsType = {
  setToggleIsFetching: (isFetching: boolean) => void;
  logout: () => void;
};

type HeaderAPIContainerType = mapStateToPropsType & mapDispatchToPropsType;

export class HeaderAPIContainer extends PureComponent<HeaderAPIContainerType> {
  render(): ReactElement {
    const { auth, login, logout } = this.props;
    return <Header login={login} auth={auth} logout={logout} />;
  }
}
