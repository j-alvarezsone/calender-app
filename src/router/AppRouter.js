import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalenderScreen } from '../components/calender/CalenderScreen';
export const AppRouter = () => {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/' component={CalenderScreen} />

          <Redirect to='/' />
        </Switch>
      </div>
    </Router>
  );
};
