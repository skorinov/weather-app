import React, { Component } from "react";
import Header from './Header.js'
import Container from './Container.js'
import WeatherDetails from './WeatherDetails.js'
import { Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
        <div className="container">
          <Header/>
          <Switch>
            <Route exact path="/" component={Container}/>
            <Route exect path="/:id" component={WeatherDetails}/>
          </Switch>
        </div>
    );
  }
}
export default App;