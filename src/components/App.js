import React from 'react';
import { Router } from '@reach/router';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import User from './User';
import Houses from './Houses';

const App = () => (
  <div>
    <Router>
      <Main path="/" />
      <SignUp path="/signup" />
      <Login path="/login" />
      <User path="/user/:id" />
      <Houses path="/houses" />
    </Router>
  </div>
);

export default App;
