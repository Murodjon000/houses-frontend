import React from 'react';
import { Router } from '@reach/router';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import Houses from './Houses';
import HouseDetail from './HouseDetail';
import Dashboard from './Dashboard';

const App = () => (
  <div id="outer-container">
    <Router>
      <Main path="/" />
      <Dashboard path="/dashboard" />
      <Houses path="/houses" />
      <HouseDetail path="/houses/:id" />
      <Login path="/login" />
      <SignUp path="/signup" />
    </Router>
  </div>
);

export default App;
