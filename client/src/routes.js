import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Learn from './pages/Learn';
import Greaterlessequal from './pages/Learn/GreaterLessEqual';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create-account" component={CreateAccount} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/learn" component={Learn} />
                <Route exact path="/learn/exercises/greater-less-equal" component={Greaterlessequal} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;