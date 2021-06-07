import React from 'react';
import { Router, RouteComponentProps } from '@reach/router';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import Houses from './Houses';
import HouseDetail from './HouseDetail';
import Dashboard from './Dashboard';
import CreateHouse from './CreateHouse';

const App = () => (
  <div id="outer-container">
    <Router>
      <RouterPage path="/" pageComponent={<Main />} />
      <Dashboard path="/dashboard" />
      <Houses path="/houses" />
      <CreateHouse path="/create-house" />
      <HouseDetail path="/houses/:id" />
      <Login path="/login" />
      <SignUp path="/signup" />
    </Router>
  </div>
);

export default App;

const RouterPage = (
  props: { pageComponent: any } & RouteComponentProps,
) => props.pageComponent;
