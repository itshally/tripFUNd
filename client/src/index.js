/* global document, alert */
import './shims.js';

//import 'core-js/es6/map';
//import 'core-js/es6/set';
import 'core-js/es/array';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ReactSignupLoginComponent from './components/ReactSignupLoginComponent';
import './routes';
import './index.css';
import tlogo from './assets/tlogo.png';
import Welcome from './components/Welcome/Welcome';
import App from './frontpage';

const routing = (
  
  <Router>
    <Route exact path="/" component={App} />
      <Route path="/home" component={Welcome} />
      {/* <Route path="/contact" component={Contact} /> */}
  </Router>
);



ReactDOM.render(routing, document.getElementById('root'));

