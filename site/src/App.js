import { hot } from 'react-hot-loader';

import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import UIkit from 'uikit';

import Home from 'pages/home';
import Products from 'pages/products';
import Distribution from 'pages/distribution';
import Contact from 'pages/contact';

import Navbar from 'components/Navbar';

import 'node_modules/uikit/dist/css/uikit.min.css'
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar>
          <Link to="/">Nosotros</Link>
          <Link to="productos">Productos</Link>
          <Link to="distribuidoras">distribuidoras</Link>
          <Link to="contacto">contacto</Link>
        </Navbar>
        <Router primary={false}>
          <Home path="/"/>
          <Products path="productos"/>
          <Distribution path="distribuidoras"/>
          <Contact path="contacto"/>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);