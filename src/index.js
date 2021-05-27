import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'; //eslint-disable-line
import Popper from 'popper.js'; //eslint-disable-line
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.scss';
import App from './components/App';
import reducer from './reducers';

const composeEnhancers = // eslint-disable-line
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);

const RootApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
