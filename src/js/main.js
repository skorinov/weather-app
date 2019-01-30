import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux";
import store from "./store/index";
import '../assets/scss/main.scss'
import App from "./components/App.js";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    document.getElementById('root'));

