import React, { Component } from 'react';

import Nav from "./common/Nav";
import HomePage from "./home/HomePage";
import UserPage from "./users/UserPage";
import { HashRouter, Route, Switch} from "react-router-dom";

import './App.scss';
import NotFound from "./common/NotFound";



class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav/>

        <HashRouter>
          <Switch>
            <Route exact path="https://mog13.github.io/react-tech-test/" component={HomePage} />
            <Route path="https://mog13.github.io/react-tech-test/users/:id" component={UserPage} />
              <Route component={NotFound} />
          </Switch>
        </HashRouter>

      </div>
    );
  }
}

export default App;
