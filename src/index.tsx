import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux_store"
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AppContainer} from "./App";


// renderTree()
// store.subscribe(renderTree)
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
// console.log(store.getState())
reportWebVitals();
