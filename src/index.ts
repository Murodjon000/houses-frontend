import React from 'react';
import ReactDOM from 'react-dom';
import App from './ind';

function initializeReactApp() {
  const appContainer = document.getElementById('root');
  if (!appContainer) throw new Error('No #appContainer found in DOM');
  ReactDOM.render(React.createElement(App), appContainer);
}

initializeReactApp();
