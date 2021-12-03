import React from 'react';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import './App.scss'
import {Navigate, Route, Routes} from "react-router-dom";
import {Music} from './components/Music/Music';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./Redux/State";
import { Profile } from './components/Profile/Profile';
import { Dialogs } from './components/Dialogs/Dialogs';

type AppPropsType = {
    state:  StateType
    addMessage: (mes: string) => void
    addPost: (postText: string) => void
    likeAdd: (id: string, isLike: boolean) => void
    removePost: (id: string) => void
    changeNewDialogCallBack: (newText: string) => void
    changeNewTextCallback: (newText: string) => void
}

export function App(props: AppPropsType) {
    console.log('render APP')
    return (
        <div className="App">
            <Header/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend">
                    <Routes>
                        <Route path='/' element={<Navigate to='/profile'/>}/>
                        <Route path='/profile' element={<Profile profileDate={props.state.profilePage}
                                                                 changeNewTextCallback={props.changeNewTextCallback}
                                                                 addPostCallback={props.addPost}
                                                                 likeAdd={props.likeAdd}
                                                                 removePost={props.removePost}/>}/>
                        <Route path='/dialogs/*' element={<Dialogs dialogsData={props.state.dialogsPage}
                                                                   addMessage={props.addMessage}
                                                                   changeNewDialogCallBack={props.changeNewDialogCallBack}/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}



