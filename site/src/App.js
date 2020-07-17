import { hot } from 'react-hot-loader';

import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import UIkit from 'uikit';
import Icons from 'node_modules/uikit/dist/js/uikit-icons';

import GetData from 'services/getData.js';

import Home from 'pages/home';
import ProductsHome from 'pages/Products';
import Distribution from 'pages/distribution';
import Contact from 'pages/contact';

import Navbar from 'components/Navbar';
import Section from 'components/Section';

import 'node_modules/uikit/dist/css/uikit.min.css'
import "./App.css";

const BasePath = ({children}) => (
  <>
  {children}
  </>
);

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div className="App">
        <Navbar>
          <Link to="/">Nosotros</Link>
          <Link to="productos">productos</Link>
          <Link to="distribuidoras">distribuidoras</Link>
          <Link to="contacto">contacto</Link>
        </Navbar>
        <Router primary={false}>
          <Home path="/"/>
          <ProductsHome path="productos/*"/>
          <Distribution path="distribuidoras"/>
          <Contact path="contacto"/>
        </Router>
        <Section tag="footer" id="eba-footer" color="secondary" className="uk-padding-remove-bottom">
          <div className="uk-grid uk-grid-large" data-uk-grid>
            <div className="uk-width-1-2@m">
              <h5>ESPECIFICOS BUENOS AIRES</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud cillum dolore eu fugiat nulla contact to: <a href="#" title="">info@company.com</a></p>
              <div>
                <a href="" className="uk-icon-button" data-uk-icon="twitter">TW</a>
                <a href="" className="uk-icon-button" data-uk-icon="facebook">FB</a>
                <a href="" className="uk-icon-button" data-uk-icon="instagram">IG</a>
              </div>
            </div>
            <div className="uk-width-1-6@m">
              <h5>PRODUCTS</h5>
              <ul className="uk-list">
                <li>proteccion solar</li>
                <li>hidratacion</li>
                <li>monodosis</li>
              </ul>
            </div>
            <div className="uk-width-1-6@m">
              <h5>OUR COMPANY</h5>
              <ul className="uk-list">
                <li>Team</li>
                <li>Work</li>
                <li>Culture</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="uk-width-1-6@m">
              <h5>OUR OFFICES</h5>
              <ul className="uk-list">
                <li>Buenos Aires</li>
                <li>Interior</li>
                <li>Exterior</li>
              </ul>
            </div>
              
          </div>
          <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
            <span className="uk-text-small uk-text-muted">©2020 ESPECIFICOS Buenos Aires </span>
          </div>
        </Section>
        <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: false">
          <div className="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
            <button className="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
            <ul className="uk-nav uk-nav-default">
              <li className="uk-active"><a href="#">Active</a></li>
              <li className="uk-parent">
                <a href="#">Parent</a>
                <ul className="uk-nav-sub">
                  <li><a href="#">Sub item</a></li>
                  <li><a href="#">Sub item</a></li>
                </ul>
              </li>
              <li className="uk-nav-header">Header</li>
              <li><a href="#js-options"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
              <li><a href="#"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
              <li className="uk-nav-divider"></li>
              <li><a href="#"><span className="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
            </ul>
            <h3>Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);