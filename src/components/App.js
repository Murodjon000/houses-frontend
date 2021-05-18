import React from 'react';
import { Router } from '@reach/router';
import Main from './Main';
import SignUp from './SignUp';

const App = () => (
  <div>
    <Router>
      <Main path="/" />
      <SignUp path="/signup" />
    </Router>
  </div>
);

export default App;
