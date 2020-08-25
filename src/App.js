import React                                      from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Register  from './component/page/register/Register';
import Login     from './component/page/login/Login';
import Dashboard from './component/page/dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path ='/register' component={Register} />
          <Route exact path ='/login' component={Login} />
          <Route exact path ='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
