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
import {Dialogs} from './components/Dialogs/Dialogs';

type AppPropsType = {
    store: StoreType
}

export const App = ({store, ...props}: AppPropsType) => {

    const state = store.getState()
    console.log('render APP')
    return (
        <div className="App">
            <Header/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend">
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<Profile profileDate={state.profilePage}
                                                                 dispatch={store.dispatch.bind(store)}
                        />}
                        />
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={state.dialogsPage}
                                                                   dispatch={store.dispatch.bind(store)}
                        />}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}



