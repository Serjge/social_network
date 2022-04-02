import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { AppContainer } from 'AppContainer';
import { store } from 'store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>,
  document.getElementById('root'),
);

reportWebVitals();
