/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import ContactPage from './containers/ContactPage';
import CounterPage from './containers/CounterPage';
import LoginPage from './containers/LoginPage';
import ReadPage from './containers/ReadPage';
import UserPage from './containers/UserPage';

export default () => (
  <App>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/read" component={ReadPage} />
      <Route path="/user" component={UserPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
