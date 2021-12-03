import React from 'react'
import './App.css';
import Login from './Login/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage';
import LandingPage from './LandingPage/LandingPage';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact><LandingPage /> </Route>
        <Route path="/login" ><Login /> </Route>
        <Route path="/signup" exact> <Signup /> </Route>
        <Route path="/homepage"><Homepage /></Route>
        {/* <Route path="/forgot_password" exact component={ForgotPassword} /> */}

      </Switch>

    </div>
  )
}

export default App
