import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/project/ProjectDetails";
import SignedIn from "./components/auth/SignedIn";
import SignedUp from "./components/auth/SignedUp";
import CreateProject from "./components/project/CreateProject";

const App=()=>{
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/project/:id" component={ProjectDetails}></Route>
            <Route path="/signIn" component={SignedIn}></Route>
            <Route path="/signUp" component={SignedUp}></Route>
            <Route path="/create" component={CreateProject}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;