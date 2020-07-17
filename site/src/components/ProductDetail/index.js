import React from 'react';
import { Link } from '@reach/router';

import { getById } from 'services/products.js';


class ProductDetail extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      product: props.location.key === 'initial' ? undefined : props.location.state.product
    }
  }

  componentDidMount() {
    if(this.state.product === undefined) {
      getById(this.props.productId)
      .then(product => {
        this.setState({ product })
      });
    }
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        {
          this.state.product ? (
            <>
              <ul className="uk-breadcrumb">
                <li>
                  <Link to='/productos'>Productos</Link>
                </li>
                <li>
                  <span>{product.name}</span>
                </li>
              </ul>
              <h3>Product detail {product.name}</h3>
            </>
          ) : (
            <div> spinner lmao </div>
          )
        }
    </div>
    )
  }
}

export default ProductDetail;