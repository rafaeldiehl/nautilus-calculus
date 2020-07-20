import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/404';
import Home from './pages/home';
import CreateAccount from './pages/create-account';
import Login from './pages/login';
import Learn from './pages/learn';
import Exercises from './pages/Exercises/exercises';
import GreaterLessEqual from './pages/Exercises/GreaterLessEqual/greater-less-equal';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/create-account" component={CreateAccount} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/learn" component={Learn} />
                <Route exact path="/learn/exercises" component={Exercises} />
                <Route exact path="/learn/exercises/greater-less-equal" component={GreaterLessEqual} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;