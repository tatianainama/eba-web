import React from 'react';

const Nav = () => {
  return (
    <div>
      <div className="nav" data-uk-sticky="cls-active: uk-background-default uk-box-shadow-medium; top: 10vh; animation: uk-animation-slide-top">
        <div className="uk-container">
          <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-navbar>
            <div className="uk-navbar-left">
              <div className="uk-navbar-item uk-padding-remove-horizontal">
                {/* <a className="uk-logo" title="Logo" href=""><img src="img/horizontal.svg" alt="home"/></a> */}
              </div>
            </div>
            <div className="uk-navbar-right">
              <ul className="uk-navbar-nav uk-visible@s">
                <li className="uk-active uk-visible@m"><a href="" data-uk-icon="home"></a></li>
                <li><a href="#us" data-uk-scroll>Nosotros</a></li>
                <li>
                  <a href="#products" data-uk-scroll>Productos</a>
                </li>
                <li><a href="#distribution" data-uk-scroll>Distribuidoras</a></li>
                <li><a href="#eba-footer" data-uk-scroll>Contacto</a></li>
              </ul>
              <a className="uk-navbar-toggle uk-navbar-item uk-hidden@s" data-uk-toggle data-uk-navbar-toggle-icon href="#offcanvas-nav"></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;