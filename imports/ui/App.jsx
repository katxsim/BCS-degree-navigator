import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import Form from './components/courses/Form'

const App = () => (
    <BrowserRouter>
    <div>
        <Navbar/>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/updatecourses' component={Form} />
        </Switch>
  </div>
    </BrowserRouter>
);

export default App;
