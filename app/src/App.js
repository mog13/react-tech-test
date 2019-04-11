import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from "./common/Nav";

import './App.css';
import HomePage from "./home/HomePage";
import UserPage from "./users/UserPage";
import {BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>

        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/list" component={UserPage} />
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
