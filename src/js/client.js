import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import AccueilComponent from "./pages/acceuil";
import AproposComp from './pages/apropos';
import InfosComp from './pages/infos';
import LoginComponent from './pages/login.js';
import LayoutComp from'./layout';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={LayoutComp}>
            <IndexRoute component={AccueilComponent}></IndexRoute>
            <Route path="apropos" component={AproposComp}></Route>
            <Route path="infos" component={InfosComp}></Route>
            <Route path="login" component={LoginComponent}></Route>
        </Route>

    </Router>
, app);
