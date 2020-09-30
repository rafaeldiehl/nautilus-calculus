import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageNotFound from './pages/404';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Learn from './pages/Learn';

const Routes = () => (
  <BrowserRouter basename="nautilus-calculus">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/create-account" component={CreateAccount} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/learn" component={Learn} />
      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
