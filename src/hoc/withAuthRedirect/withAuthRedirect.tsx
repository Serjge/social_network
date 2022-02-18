// import { Navigate } from "react-router-dom";
// import { AppStateType } from "store/store";
// import { connect } from "react-redux";
// import { ComponentType } from "react";
//
// type mapStateToPropsType = {
//   isAuth: boolean
// }
//
// const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
//   return {
//     isAuth: state.authPage.isAuth
//   }
// }
//
// export function withAuthRedirect<T>(WrappedComponent: ComponentType<T>) {
//   const RedirectComponent = (props: mapStateToPropsType) => {
//
//     const { isAuth, ...restProps } = props
//
//     if (!isAuth) {
//       return <Navigate to={ '/login' }/>
//     }
//     return <WrappedComponent { ...restProps as T } />
//   }
//   return connect(mapStateToProps)(RedirectComponent)
// }

import { ComponentType, ReactElement } from 'react';

import {
  connect,
  ConnectedComponent,
  DispatchProp,
  DistributiveOmit,
  GetLibraryManagedProps,
  Shared,
} from 'react-redux';
import { Navigate } from 'react-router-dom';

import { AppStateType } from 'store/store';

type mapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: state.authPage.isAuth,
});

export function withAuthRedirect<T>(
  WrappedComponent: ComponentType<T>,
): ConnectedComponent<
  (props: mapStateToPropsType) => ReactElement,
  DistributiveOmit<
    GetLibraryManagedProps<(props: mapStateToPropsType) => ReactElement>,
    keyof Shared<
      mapStateToPropsType & DispatchProp,
      GetLibraryManagedProps<(props: mapStateToPropsType) => ReactElement>
    >
  >
> {
  const RedirectComponent = (props: mapStateToPropsType): ReactElement => {
    const { isAuth, ...restProps } = props;

    if (!isAuth) {
      return <Navigate to="/login" />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...(restProps as T)} />;
  };
  return connect(mapStateToProps)(RedirectComponent);
}
