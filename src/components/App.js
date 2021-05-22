import React from 'react';
import { Router } from '@reach/router';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import User from './User';
import Houses from './Houses';
import HouseDetail from './HouseDetail';
import Dashboard from './Dashboard';

const App = () => {
  if (!localStorage.getItem('token')) {
    return (
      <div>
        <Router>
          <Main path="/" />
          <SignUp path="/signup" />
          <Login path="/login" />
        </Router>
      </div>
    );
  }
  return (
    <div>
      <Router>
        <Dashboard path="/" />
        <User path="/user/:id" />
        <Houses path="/houses" />
        <HouseDetail path="/houses/:id" />
      </Router>
    </div>
  );
};

export default App;
