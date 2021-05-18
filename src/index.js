import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery'; //eslint-disable-line
import Popper from 'popper.js'; //eslint-disable-line
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/App.scss';
import App from './components/App';

const RootApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(<RootApp />, document.getElementById('root'));
