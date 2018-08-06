import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Header from '../Header/Header';
import AdminTable from '../AdminTable/AdminTable';
// import FeedbackCard from '../FeedbackCard/FeedbackCard';
import NotFound from '../NotFound/NotFound';
import FeedbackFeeling from '../FeedbackFeeling/FeedbackFeeling';
import FeedbackUnderstanding from '../FeedbackUnderstanding/FeedbackUnderstanding';
import FeedbackSupport from '../FeedbackSupport/FeedbackSupport';
import FeedbackComments from '../FeedbackComments/FeedbackComments';
import FeedbackComplete from '../FeedbackComplete/FeedbackComplete';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route path="/admin" component={AdminTable} />
            <Route path="/feedback_pg_1" component={FeedbackFeeling} />
            <Route path="/feedback_pg_2" component={FeedbackUnderstanding} />
            <Route path="/feedback_pg_3" component={FeedbackSupport} />
            <Route path="/feedback_pg_4" component={FeedbackComments} />
            <Route path="/feedback_submitted" component={FeedbackComplete} />
            <Redirect exact from="/" to="/feedback_pg_1" />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
