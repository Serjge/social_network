import React from 'react';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StoreType} from "./Redux/State";
import {Profile} from './components/Profile/Profile';
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

export const App = ({store}: AppPropsType) => {

    return (
        <div className="App">
            <Header/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend">
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<Profile store={store}/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer store={store}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}



