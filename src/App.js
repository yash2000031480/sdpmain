import React from 'react'
import './App.css';
import Login from './Login/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage';
import LandingPage from './LandingPage/LandingPage';
import Cart from './Cart/Cart';
import Faq from './Faq/Faq'
import Terms from './Terms/Terms'
import Privacy from './Privacy/Privacy'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact><LandingPage /> </Route>
        <Route path="/login" ><Login /> </Route>
        <Route path="/signup" exact> <Signup /> </Route>
        <Route path="/homepage"><Homepage /></Route>
        <Route path="/cart" component={Cart} />
        <Route path="/Faq" component={Faq} />
        <Route path="/Terms" component={Terms} />
        <Route path="/Privacy" component={Privacy} />

        {/* <Route path="/forgot_password" exact component={ForgotPassword} /> */}

      </Switch>

    </>
  )
}

export default App
