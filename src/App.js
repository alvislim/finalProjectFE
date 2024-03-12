import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Register from "./component/page/register/Register";
import Login from "./component/page/login/Login";
import Dashboard from "./component/page/dashboard/Dashboard";
import SingleView from "./component/page/SingleView/SingleView";
import LandingPage from "./component/page/landingpage/LandingPage";
import About from "./component/page/about/About";

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/about' component={About} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/:id' component={SingleView} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
