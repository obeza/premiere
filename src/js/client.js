import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, Link, hashHistory, browserHistory, IndexRoute } from "react-router";

import AccueilComponent from "./pages/acceuil";
import AproposComp from './pages/apropos';
import InfosComp from './pages/infos';
import LoginComponent from './pages/login';
import LayoutComp from './layout';

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={LayoutComp}>
            <Route path="/accueil" component={AccueilComponent}></Route>
            <Route path="/apropos" component={AproposComp}></Route>
            <Route path="/infos" component={InfosComp}></Route>
        </Route>
        <Route path="/login" component={LoginComponent}></Route>

    </Router>
, app);
