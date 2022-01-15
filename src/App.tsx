import React from 'react';
import {Navbar} from './components/Navbar/Navbar'
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {Login} from "./components/Login/Login";


export const App = () => {

return (
        <div className="App">
            <HeaderContainer/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend">
                    <Routes>
                        <Route path={'/'} element={<Navigate to="/profile"/>}/>
                        <Route path="/profile" element={<ProfileContainer />}>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path='/dialogs' element={<DialogsContainer/>}>
                            <Route path=':userId' element={<DialogsContainer/>}/>
                        </Route>
                        <Route path='/users' element={<UsersContainer/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}



