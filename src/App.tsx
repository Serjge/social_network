import React from 'react';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Dialogs} from './components/Dialogs/Dialogs'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";

export function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className="app__wrapper">
                    <Navbar/>
                    <div className="app__wrapper_contend">
                        <Routes>
                            <Route path='/profile' element={<Profile/>}/>
                            <Route path='/dialogs' element={<Dialogs/>}/>
                            <Route path='/music' element={<Music />}/>
                            <Route path='/news' element={<News />}/>
                            <Route path='/settings' element={<Settings />}/>
                        </Routes>
                    </div>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

