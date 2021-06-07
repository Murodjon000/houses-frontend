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
      <RouterPage path="/dashboard" pageComponent={<Dashboard />} />
      <RouterPage path="/houses" pageComponent={<Houses />} />
      <RouterPage
        path="/create-house"
        pageComponent={<CreateHouse />}
      />
      <RouterPage
        path="/houses/:id"
        pageComponent={<HouseDetail />}
      />
      <RouterPage path="/login" pageComponent={<Login />} />
      <RouterPage path="/signup" pageComponent={<SignUp />} />
    </Router>
  </div>
);

export default App;

const RouterPage = (
  props: { pageComponent: any } & RouteComponentProps,
) => props.pageComponent;
