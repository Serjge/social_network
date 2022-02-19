import './index.css';

import { StrictMode } from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { AppContainer } from 'AppContainer';
import { store } from 'store';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
