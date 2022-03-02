import './index.css';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { AppContainer } from 'AppContainer';
import { store } from 'store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
