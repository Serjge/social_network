import { Navbar } from 'components/navbar/Navbar'
import 'App.scss'
import { UsersContainer } from 'components/users/UsersContainer';
import { Navigate, Route, Routes } from "react-router-dom";
import { HeaderContainer } from 'components/header/HeaderContainer';

import { connect } from "react-redux";
import { AppStateType } from "store/store";
import { Preloader } from "components/common/preloader/Preloader";
import { initializedApp } from "store/reducers/AppReducer";
import { getInitialized } from "store/selectors/appSelectors";
import { Component } from "react";
import { DialogsContainer } from 'components/dialogs/DialogsContainer';
import { LoginContainer } from 'components/login';
import { Settings } from 'components/settings';
import { ProfileContainer } from 'components/profile';

type mapDispatchToPropsType = {
  initializedApp: () => void
}
type mapStateToPropsType = {
  initialized: boolean
}

type AppContainerType = mapDispatchToPropsType & mapStateToPropsType

export class App extends Component<AppContainerType> {

  componentDidMount() {
    this.props.initializedApp()
  }


  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="App">
        <HeaderContainer/>
        <div className="app__wrapper">
          <Navbar/>
          <div className="app__wrapper_contend">
            <Routes>
              <Route path={ '/' } element={ <Navigate to="/profile"/> }/>
              <Route path="/profile" element={ <ProfileContainer/> }>
                <Route path=":userId" element={ <ProfileContainer/> }/>
              </Route>
              <Route path='/dialogs' element={ <DialogsContainer/> }>
                <Route path=':userId' element={ <DialogsContainer/> }/>
              </Route>
              <Route path='/users' element={ <UsersContainer/> }/>
              <Route path='/login' element={ <LoginContainer/> }/>
              <Route path='/settings' element={ <Settings/> }/>
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    initialized: getInitialized(state)
  }
}

export const AppContainer = connect(mapStateToProps, {

  initializedApp,

})(App)

