import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/State"
import {renderTree} from "./render";


renderTree(store.getState())
store.subscribe(renderTree)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// state: StateType
// addMessage: (mes: string) => void
//     addPost: (postText: string) => void
//     removePost: (id: string) => void
//     changeNewDialogCallBack: (newText: string) => void
//     changeNewTextCallback: (newText: string) => void