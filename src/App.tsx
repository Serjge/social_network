import React from 'react';
import {Header} from './components/Header/Header'
import {Navbar} from './components/Navbar/Navbar'
import {Profile} from './components/Profile/Profile'
import './App.scss'
import {Footer} from "./components/Footer/Footer";
import {Dialogs}  from './components/Dialogs/Dialogs'

export function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app__wrapper">
                <Navbar/>
                <div className="app__wrapper_contend" >
                {/*<Profile/>*/}

                <Dialogs />
                    </div>
            </div>
            <Footer/>
        </div>
    );
}

// export default App;
