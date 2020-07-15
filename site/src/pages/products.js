import React from 'react';
import PropTypes from 'prop-types';

import Section from 'components/Section';
import Card from 'components/Card';

import './products.css';

const Products = ({
  products
}) => {
  return (
    <Section>
      <h2>Products</h2>
      <div className="eba-products-list">
        {
          products.map(product => (
            <Card key={product._id} title={product.name} onClick={() => {console.log(product._id)}}>
              <p>{product.desc}</p>
            </Card>
          ))
        }
      </div>
    </Section>
  )
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    desc: PropTypes.string,
    fullDesc: PropTypes.string,
    actives: PropTypes.arrayOf(PropTypes.string),
    ph: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.shape({
      code: PropTypes.number,
      content: PropTypes.string,
      price: PropTypes.number,
      sellPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })),
    apply: PropTypes.string,
    lang: PropTypes.string
  }))
}

export default Products;