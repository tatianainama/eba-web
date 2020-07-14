import React from 'react';
import coverImg from 'img/cover-photo.jpg';
import Productos from 'img/productos.png';
import Protectores from 'img/protectores.png';
import Monodosis from 'img/monodosis.png';

const Home = () => {
  return (
    <>
    <div className="top-wrap uk-position-relative">
      <div className="uk-cover-container uk-flex uk-flex-middle top-wrap-height">
        <div className="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top" data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
          <div className="uk-width-1-2@s uk-position-right" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150">
            <h1 className="uk-margin-remove-top uk-text-right">Cuidado específico para cada tipo de piel.</h1>
            <p className="subtitle-text uk-visible@s uk-text-right">Productos profesionales, elaborados con normas de calidad internacional GMP, basados en sustancias activas concentradas de gran pureza y vehículos específicos altamente eficaces que permiten optimizar la belleza y cuidados personalizados de la piel, con base científica.</p>
          </div>
        </div>
        <img src={coverImg} alt="" data-uk-cover data-uk-img data-uk-parallax="opacity: 1,0.1; easing:0" />
      </div>
    </div>

    <section id="us" className="uk-section uk-section-default uk-section-large">
      <div className="uk-container">
        <h3>Nosotros</h3>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae earum odit? Ducimus, ratione, deleniti eius sed cumque eaque rerum expedita in dolore debitis corporis perferendis, excepturi voluptates possimus repellat.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magnam nobis vel tempora, hic culpa quos tenetur consequatur rem sunt iste itaque dolores! Commodi eius temporibus culpa asperiores, assumenda illum.</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga consequatur ea illo exercitationem omnis repellendus aspernatur, cupiditate repellat nulla id expedita repudiandae eos perspiciatis sint qui maxime. Dignissimos, reiciendis?</p>
          
        </div>
      </div>
    </section>

    <section id="products" className="uk-section uk-section-muted">
      <div className="uk-container">
        <div className="uk-section uk-section-small uk-padding-remove-top">
          <ul className="uk-subnav uk-subnav-pill uk-flex uk-flex-center" data-uk-switcher="connect: .eba-products-desc; animation: uk-animation-fade">
            <li><a className="uk-border-pill" href="#">Lorem</a></li>
            <li><a className="uk-border-pill" href="#">Ipsum</a></li>
            <li><a className="uk-border-pill" href="#">Consectetur</a></li>
          </ul>
        </div>
        <ul className="uk-switcher uk-margin eba-products-desc">
          <li>
            <div className="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
              <div>
                <img src={Productos} data-src={Productos} alt="" data-uk-img />
              </div>
              <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">Aut fuga consequatur</h6>
                <h2 className="uk-margin-small-top">cupiditate repellat nulla id expedita</h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
              <div>
                <img src={Protectores} data-src={Protectores} alt="" data-uk-img/>
              </div>
              <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">Aut fuga consequatur</h6>
                <h2 className="uk-margin-small-top">cupiditate repellat nulla id expedita</h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation. 
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
              <div>
                <img src={Monodosis} data-src={Monodosis} alt="" data-uk-img />
              </div>
              <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                <h6 className="uk-text-primary">Aut fuga consequatur</h6>
                <h2 className="uk-margin-small-top">cupiditate repellat nulla id expedita</h2>
                <p className="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation.
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="uk-flex uk-flex-center">
          <button className="uk-button uk-button-primary ">Catalogo</button>
        </div>
      </div>
    </section>

    <footer id="eba-footer" className="uk-section uk-section-secondary uk-padding-remove-bottom">
      <div className="uk-container">
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
      </div>
      
      <div className="uk-text-center uk-padding uk-padding-remove-horizontal">
        <span className="uk-text-small uk-text-muted">©2020 ESPECIFICOS Buenos Aires </span>
      </div>
    </footer>
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
    </>
  
  )
};

export default Home;