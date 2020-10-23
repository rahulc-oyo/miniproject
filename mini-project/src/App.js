import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import UserLogIn from './Components/UserLogIn.js';
import AdminLogIn from './Components/AdminLogIn.js';
import Error from './Components/Error.js';
// import shakeHands from './shakeHands.jpg';

function App() {

  return (
    <Switch>
      <Route exact path='/' component={UserLogIn}/>
      <Route exact path='/adminlogin' component={AdminLogIn}/>
      {/* <Route Path='/signup' Component='SignUp'></Route> */}
      <Route component={Error}/>
    </Switch>

  );
}

export default App;
