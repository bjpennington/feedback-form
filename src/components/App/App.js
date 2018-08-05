import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import AdminTable from '../AdminTable/AdminTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AdminTable />
        <br/>
      </div>
    );
  }
}

export default App;
