import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Router, navigate } from '@reach/router';

import Section from 'components/Section';
import Card from 'components/Card';
import Link from 'components/Link';
import Slideshow from 'components/Slideshow';
import Label from 'components/Label';

import { getByCategory, getByName } from 'services/products.js';

const API = process.env.API || '/';
const ParseData = (data) => data.replace(/ /g, '_');
const UnparseData = (data) => data.replace(/_/g, ' ');

import './styles.css';

const ProductsList = ({ products, category }) => {
  return (
    <div className="eba-products-list uk-child-width-1-2@s uk-child-width-1-4@m uk-text-center" data-uk-grid data-uk-height-match="target: > div > .uk-card">
      {
        products.map(product => (
          <div key={product._id}>
            <Card
              color="muted"
              size='small'
              title={product.name}
              onClick={() => { navigate(`/productos/detalle/${ParseData(product.name)}`, {state: {category: category }}) }}
              media={product.image ? `${API}/images/${product.image}` : undefined}
            >
            </Card>
          </div>
        ))
      }
    </div>
  )
};

const Details = ({ productName, location }) => {
  const [ product, setProduct ] = useState(undefined);
  const fromCategory = location.state ? location.state.category : undefined;
  
  useEffect(() => {
    getByName(UnparseData(productName)).then(product => setProduct(product));
  }, [ productName ]);

  console.log(product)
  return (
    <div className="uk-container eba-product-detail">
      {
        product ? (
          <div>
            <ul className="uk-breadcrumb">
              <li><Link to="/productos">Productos</Link></li>
              {
                fromCategory && (
                <li>
                  <Link to={`/productos/${ParseData(fromCategory)}`}>{fromCategory}</Link>
                </li>
                )
              }
              <li>{ product.name }</li>
            </ul>
            <div className="uk-grid">
              <div className="uk-width-medium">
                <Slideshow
                  images={[
                    { url: `${API}/images/${product.image}`, alt: product.name },
                    ...product.variants.filter(variant => variant.image !== undefined).map(variant => (
                      { url: `${API}/images/${variant.image}`, alt: variant.content }
                    ))
                  ]}
                />
              </div>
              <div className="uk-width-expand">
                <div className="uk-container">
                  <h2 className="uk-heading-bullet">{ product.name }</h2>
                  <p className="uk-text-meta">{product.desc}</p>
                  <dl className="uk-description-list">
                    <dt>Descripcion</dt>
                    <dd>{product.fullDesc}</dd>
                    {
                      product.actives.length ? (
                        <>
                          <dt>Activos</dt>
                          <dd>
                            {
                              product.actives.map(active => (
                                <Label key={active}>{active}</Label>
                              ))
                            }
                          </dd>
                        </>
                      ) : null
                    }
                    <dt>Presentacion</dt>
                    <dd>
                      {
                        product.variants.map(variant => (
                          <Label key={variant.code}>{variant.content}</Label>
                        ))
                      }
                    </dd>
                    {
                      product.apply ? (
                        <>
                          <dt>Aplicacion</dt>
                          <dd>
                            { product.apply }
                          </dd>
                        </>
                      ) : null
                    }
                  </dl>
                  
                </div>
              </div>
            </div>
          </div>
        ) : null
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
  const category = categoryName ? UnparseData(categoryName) : undefined;
  const [ products, setProducts ] = useState(undefined);

  useEffect(() => {
    getByCategory(category).then(result => {
      setProducts(result);
    })
  }, [category]);

  return (
    <div>
      {
        products && (<ProductsList products={products} category={category}/>)
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