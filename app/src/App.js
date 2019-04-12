import React, { Component } from 'react';

import Nav from "./common/Nav";

import './App.css';
import HomePage from "./home/HomePage";
import UserPage from "./users/UserPage";
import {BrowserRouter, Route} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>

        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/:id" component={UserPage} />
          </div>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
