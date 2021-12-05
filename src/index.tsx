import './index.css';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/State"
import {renderTree} from "./render";


renderTree()
store.subscribe(renderTree)

reportWebVitals();
