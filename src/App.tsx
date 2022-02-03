import React from 'react';
import {Navbar} from './components/Navbar/Navbar'
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Settings} from "./components/Settings/Settings";
import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";
import {AppStateType} from "./Redux/redux_store";
import {Preloader} from "./components/common/preloader/Preloader";
import {initializedApp} from "./Redux/AppReducer";
import {getInitialized} from "./Redux/appSelectors";

type mapDispatchToPropsType = {
    initializedApp: ()=>void
}
type mapStateToPropsType = {
    initialized: boolean
}

type AppContainerType = mapDispatchToPropsType & mapStateToPropsType

export class App extends React.Component<AppContainerType> {

    componentDidMount() {
        this.props.initializedApp()
        console.log(this.props.initialized)
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
                            <Route path={'/'} element={<Navigate to="/profile"/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}>
                                <Route path=":userId" element={<ProfileContainer/>}/>
                            </Route>
                            <Route path='/dialogs' element={<DialogsContainer/>}>
                                <Route path=':userId' element={<DialogsContainer/>}/>
                            </Route>
                            <Route path='/users' element={<UsersContainer/>}/>
                            <Route path='/login' element={<LoginContainer/>}/>
                            <Route path='/settings' element={<Settings/>}/>
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

