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
            <Card
              key={product._id}
              size='small'
              title={product.name}
              onClick={() => {console.log(product._id)}}
              media={product.image ? `http://localhost:3000/images/${product.image}` : undefined}
            >
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

export default Products;