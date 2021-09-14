import React from "react";
import { Switch,Route } from "react-router-dom";

import Header from './Components/Header';
import Login from './Page/Login';
import Home from './Page/Home';
import Register from "./Page/Register";

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
                <Route exact path="/registrar">
                    <Register />
                </Route>
            </Switch>
        </>
    );
}