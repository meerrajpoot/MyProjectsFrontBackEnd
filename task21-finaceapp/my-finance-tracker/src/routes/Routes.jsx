import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SignUp from '../components/SignUp';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Income from '../components/Income';
import Expenses from '../components/Expenses';
import Savings from '../components/Savings';

const Routes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" render={() => (user ? <Dashboard /> : <Redirect to="/login" />)} />
        <Route path="/add-income" render={() => (user ? <Income /> : <Redirect to="/login" />)} />
        <Route path="/add-expense" render={() => (user ? <Expenses /> : <Redirect to="/login" />)} />
        <Route path="/add-saving" render={() => (user ? <Savings /> : <Redirect to="/login" />)} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </Router>
  );
};

export default Routes;
