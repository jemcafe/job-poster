import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from '../containers/HomeCtnr/HomeCtnr';
import Login from '../containers/LoginCtnr/LoginCtnr';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/signin" component={ Login } />
    </Switch>
)