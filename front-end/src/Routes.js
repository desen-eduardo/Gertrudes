import React from "react";
import { Switch,Route } from "react-router-dom";

import Header from './Components/Header';
import Login from './Page/Login';
import Home from './Page/Home';

export default () => {
    return(
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </>
    );
}