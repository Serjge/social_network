import React from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import './App.scss';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper">
                <Navbar/>
                <Profile/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
