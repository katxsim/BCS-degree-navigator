import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "../imports/ui/components/layout/Navbar";
import Dashboard from "../imports/ui/components/dashboard/Dashboard";
import ProjectDetails from "../imports/ui/components/projects/ProjectDetails";
import SignIn from "../imports/ui/components/auth/SignIn";
import SignUp from "../imports/ui/components/auth/SignUp";
import CreateProject from "../imports/ui/components/projects/CreateProject";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateProject} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
