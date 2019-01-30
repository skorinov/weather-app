import React, { Component } from "react";
import Form from './Form.js'
import WeatherList from './WeatherList.js'

class Container extends Component {
  render() {
    return (
        <div>
          <Form />
          <WeatherList />
        </div>
    );
  }
}
export default Container;