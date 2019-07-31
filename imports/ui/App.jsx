import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/layout/Navbar'
import Dashboard from "./components/dashboard/Dashboard";

const App = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path='/' component={Dashboard} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
