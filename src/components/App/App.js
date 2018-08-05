import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../Header/Header';
import AdminTable from '../AdminTable/AdminTable';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import NotFound from '../NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/admin" component={AdminTable} />
            <Route path="/feedback_pg_2" component={FeedbackCard} />
            <Redirect exact from="/" to="/feedback_pg_2" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
