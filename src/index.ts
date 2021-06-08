import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';

function initializeReactApp() {
  const appContainer = document.getElementById('root');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  ReactDOM.render(React.createElement(App), appContainer);
}

initializeReactApp();
