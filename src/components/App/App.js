import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../Header/Header';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import FeedbackComments from '../FeedbackComments/FeedbackComments';
import FeedbackComplete from '../FeedbackComplete/FeedbackComplete';
import AdminTable from '../AdminTable/AdminTable';
import NotFound from '../NotFound/NotFound';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/admin" component={AdminTable} />
            <Route path="/feedback/4" component={FeedbackComments} />
            <Route path="/feedback/:id" component={FeedbackCard} />
            <Route path="/feedback_submitted" component={FeedbackComplete} />
            <Redirect exact from="/" to="/feedback/1" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
