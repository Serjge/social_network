import { lazy, PureComponent, ReactElement, Suspense } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import style from 'App.module.scss';
import { AppContainerType } from 'AppContainer';
import { HeaderContainer, Navbar, Preloader } from 'components';
import { path } from 'enum';

const DialogsContainer = lazy(() => import('components/dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('components/profile/ProfileContainer'));
const UsersContainer = lazy(() => import('components/users/UsersContainer'));
const Settings = lazy(() => import('components/settings/Settings'));
const LoginContainer = lazy(() => import('components/login/LoginContainer'));

export class App extends PureComponent<AppContainerType> {
  componentDidMount(): void {
    const { initializedApp } = this.props;
    initializedApp();
  }

  render(): ReactElement {
    const { initialized } = this.props;
    if (!initialized) {
      return (
        <div className={style.preloader}>
          <Preloader />
        </div>
      );
    }
    return (
      <div>
        <HeaderContainer />
        <div className={style.wrapper}>
          <Navbar />
          <div className={style.content}>
            <Suspense fallback={<div>Loading</div>}>
              <Routes>
                <Route path={path.root} element={<Navigate to={path.profile} />} />
                <Route path={path.profile} element={<ProfileContainer />}>
                  <Route path={path.userId} element={<ProfileContainer />} />
                </Route>
                <Route path={path.dialogs} element={<DialogsContainer />}>
                  <Route path={path.userId} element={<DialogsContainer />} />
                </Route>
                <Route path={path.users} element={<UsersContainer />} />
                <Route path={path.login} element={<LoginContainer />} />
                <Route path={path.settings} element={<Settings />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
}
