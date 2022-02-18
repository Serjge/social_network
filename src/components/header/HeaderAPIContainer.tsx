import { PureComponent, ReactElement } from 'react';

import { Header } from './Header';

import { Preloader } from 'components/common';

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

export class HeaderAPIContainer extends PureComponent<
  HeaderAPIContainerType,
  HeaderAPIContainerType
> {
  render(): ReactElement {
    const { isFetching, auth, login, logout } = this.props;
    return (
      <>
        {isFetching ? <Preloader /> : null}
        <Header login={login} auth={auth} logout={logout} />
      </>
    );
  }
}
