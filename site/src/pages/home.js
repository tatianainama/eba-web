import React from 'react';
import coverImg from 'img/cover-photo.jpg';
import Productos from 'img/productos.png';
import Protectores from 'img/protectores.png';
import Monodosis from 'img/monodosis.png';
import Section from 'components/Section';

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
    <Section color='default' id="us">
      <h3>Nosotros</h3>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae earum odit? Ducimus, ratione, deleniti eius sed cumque eaque rerum expedita in dolore debitis corporis perferendis, excepturi voluptates possimus repellat.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores magnam nobis vel tempora, hic culpa quos tenetur consequatur rem sunt iste itaque dolores! Commodi eius temporibus culpa asperiores, assumenda illum.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga consequatur ea illo exercitationem omnis repellendus aspernatur, cupiditate repellat nulla id expedita repudiandae eos perspiciatis sint qui maxime. Dignissimos, reiciendis?</p>
      </div>
    </Section>

    <Section id="products" color="muted">
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
    </Section>

    
    </>
  
  )
};

export default Home;