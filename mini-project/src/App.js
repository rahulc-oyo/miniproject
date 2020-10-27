import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserLogIn from './login/UserLogIn.js';
import AdminLogIn from './login/AdminLogIn.js';
import Error from './Error.js';
import SignUp from './signup/SignUp.js';
import Dashboard from './dashboard/Navbar.js';

function App() {

  return (
    <Switch>
      <Route exact path='/' component={UserLogIn}/>
      <Route exact path='/adminlogin' component={AdminLogIn}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/dashboard' component={Dashboard}/>
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
