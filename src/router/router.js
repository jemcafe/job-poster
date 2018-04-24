import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from '../containers/HomeContainer/HomeContainer';
import Login from '../containers/LoginContainer/LoginContainer';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/signin" component={ Login } />
    </Switch>
)