import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalenderScreen } from '../components/calender/CalenderScreen';
import { startChecking } from '../redux/actions/auth/auth';
export const AppRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

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
