import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'

const App = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path='/' component={Dashboard} />
                <Route exact path='/signin' component={SignIn} />
                <Route exact path='/signup' component={SignUp} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
