import React, {useState} from 'react';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from './components/Dialogs/Dialogs'
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./Redux/State"

type AppPropsType = {
    state: StateType
}

export function App(props: AppPropsType) {

    return (
        <div className="App">
            <Header/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend">
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<Profile  profileDate={props.state.profilePage}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}



