import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, navigate } from '@reach/router';

import Section from 'components/Section';
import Card from 'components/Card';
import Link from 'components/Link';

import { getByCategory, getByName } from 'services/products.js';

const API = process.env.API || '/';
const ParseData = (data) => data.replace(/ /g, '_');
const UnparseData = (data) => data.replace(/_/g, ' ');

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
              onClick={() => { navigate(`/productos/detalle/${ParseData(product.name)}`) }}
              media={product.image ? `${API}/images/${product.image}` : undefined}
            >
            </Card>
          </div>
        ))
      }
    </div>
  )
};

const Details = ({ productName, ...props }) => {
  const [ product, setProduct ] = useState(undefined);
  console.log(props);
  useEffect(() => {
    getByName(UnparseData(productName)).then(product => setProduct(product));
  }, [ productName ]);

  return (
    <div>
      {
        product && (
          <div>
            {product.name} 
          </div>
        )
      }
    </div>
  )
}

const ProductsHome = () => (
  <Section id="eba-products">
    <Router>
      <CategoriesHome path="/">
        <ProductList path="/*categoryName"/>
      </CategoriesHome>
      <Details path="detalle/:productName" />
    </Router>
  </Section>
);

const ProductList = ({ categoryName }) => {
  const category = categoryName ? UnparseData(categoryName) : 'all';
  const [ products, setProducts ] = useState(undefined);

  useEffect(() => {
    getByCategory(category).then(result => {
      setProducts(result);
    })
  }, [category]);

  return (
    <div>
      {
        products && (<ProductsList products={products}/>)
      }
    </div>
  )
}

const CategoriesHome = ({ location, children }) => {
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
  ];

  return (
    <div>
      <div data-uk-grid>
        <div className="uk-width-auto@m">
          <ul className="uk-tab-left uk-tab">
            {
              categories.map((name) => (
                <li key={name}>
                  <Link to={ParseData(name)}>{name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="uk-width-expand@m">
          { children }
        </div>
      </div>
    </div>
  )
}

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