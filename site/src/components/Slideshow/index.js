import React from 'react';

import './styles.css';

const Slideshow = ({ images }) => {
  return (
    <div className="uk-position-relative uk-visible-toggle uk-dark eba-slideshow" tabIndex="-1" data-uk-slideshow="ratio: false">

      <ul className="uk-slideshow-items" data-uk-height-viewport="offset-bottom: 40; min-height: 500">
        {
          images.map( ({ url, alt }, index) => (
            <li key={index}>
              <img src={url} alt={alt} data-uk-img="target: !.uk-slideshow-items" data-uk-img="target: !.uk-slideshow-items"/>    
            </li>
          ))
        }
      </ul>

      <a className="uk-position-center-left uk-position-small" href="#" data-uk-slidenav-previous data-uk-slideshow-item="previous"></a>
      <a className="uk-position-center-right uk-position-small" href="#" data-uk-slidenav-next data-uk-slideshow-item="next"></a>
    </div>
  )
};

export default Slideshow;