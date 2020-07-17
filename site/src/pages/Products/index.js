import React from 'react';
import PropTypes from 'prop-types';
import { Router, navigate } from '@reach/router';

import Section from 'components/Section';
import Card from 'components/Card';
import ProductDetail from 'components/ProductDetail';

import './styles.css';

const ProductsList = ({ products }) => {
  return (
    <div className="eba-products-list uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center" data-uk-grid data-uk-height-match="target: > div > .uk-card">
      {
        products.map(product => (
          <div key={product._id}>
            <Card
              color="muted"
              size='small'
              title={product.name}
              onClick={() => { navigate(`/productos/${product._id}`, { state: { product }}) }}
              media={product.image ? `http://localhost:3000/images/${product.image}` : undefined}
            >
            </Card>
          </div>
        ))
      }
    </div>
  )
};

const Products = ({
  products,
}) => {

  const categories = [
    "Protección Intensiva",
    "Higiene",
    "Máscaras",
    "Peeling",
    "Ácido Hialurónico",
    "Hombres",
    "Activos Concentrados",
    "Monodosis",
    "Protección Solar",
    "Corporales",
    "Therapy Rituals"
  ].map(category => {
    return {
      name: category,
      products: products.filter(product => product.category.includes(category))
    }
  });

  return (
    <div>
      <div data-uk-grid>
        <div className="uk-width-auto@m">
            <ul id="eba-products-category" className="uk-tab-left" data-uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
                {
                  categories.map(({ name }) => (
                    <li key={name}>
                      <a href="#eba-products" data-uk-scroll>{name}</a>
                    </li>
                  ))
                }
                <li><a href="#eba-products" data-uk-scroll>Ver Todos</a></li>
            </ul>
        </div>
        <div className="uk-width-expand@m">
            <ul id="component-tab-left" className="uk-switcher">
                {
                  categories.map(({name, products}) => (
                    <li key={name}>
                      <ProductsList products={products} />
                    </li>
                  ))
                }
                <li>
                  <ProductsList products={products} />
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

const ProductsHome = ({ products }) => (
  <Section id="eba-products">
    <Router>
      <Products products={products} path="/"></Products>
      <ProductDetail path=":productId"></ProductDetail>
    </Router>
  </Section>
);

ProductsHome.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    desc: PropTypes.string,
    fullDesc: PropTypes.string,
    actives: PropTypes.arrayOf(PropTypes.string),
    ph: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.number.isRequired,
      content: PropTypes.string,
      price: PropTypes.number,
      sellPrice: PropTypes.number,
      image: PropTypes.string
    })),
    image: PropTypes.string,
    apply: PropTypes.string,
    lang: PropTypes.string
  }))
}

export default ProductsHome;