import { hot } from 'react-hot-loader';

import React, { Component} from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';


import Home from 'pages/home';
import Products from 'pages/products';

import Navbar from 'components/Navbar';

import 'node_modules/uikit/dist/css/uikit.min.css'
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Navbar></Navbar>
          <div>
            <Link to="/products">products</Link>
            <Link to="/">home</Link>
          </div>
          <Switch>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);