import {StateType, store} from "./Redux/State";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";

export const renderTree = (state:StateType) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={store.getState()}
                     addMessage={store.addMessage.bind(store)}
                     likeAdd={store.likeAdd.bind(store)}
                     removePost={store.removePost.bind(store)}
                     changeNewTextCallback={store.changeNewTextCallback.bind(store)}
                     addPost={store.addPost.bind(store)}
                     changeNewDialogCallBack={store.changeNewDialogCallBack.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

