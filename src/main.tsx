import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.scss';
import App from './components/App';
import reducer from './reducers';
import 'font-awesome/css/font-awesome.min.css';
import Bus from './helpers/Bus';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    flash: any;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

window.flash = (message: any, type = 'success') =>
  Bus.emit('flash', { message, type });

const RootApp = () => (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

export default RootApp;
