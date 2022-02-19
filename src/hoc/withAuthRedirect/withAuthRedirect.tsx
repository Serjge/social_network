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

import { AppStateType } from 'store';
import { getIsAuth } from 'store/selectors';

type mapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
  isAuth: getIsAuth(state),
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
