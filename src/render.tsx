import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App, AppContainer} from "./App";
import {store} from "store/store";
import {Provider} from "react-redux";

export const renderTree = () => {

    // ReactDOM.render(
    //     <React.StrictMode>
    //         <BrowserRouter>
    //             <Provider store={store}>
    //                 <AppContainer/>
    //             </Provider>
    //         </BrowserRouter>
    //     </React.StrictMode>,
    //     document.getElementById('root')
    // );
}

