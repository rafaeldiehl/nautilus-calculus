import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PageNotFound from './pages/404';
import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import Learn from './pages/Learn';
import Exercises from './pages/Learn/Exercises';
import GreaterLessEqual from './pages/Learn/Exercises/GreaterLessEqual';

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