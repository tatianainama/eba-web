import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Card = ({
  color,
  size = 'small',
  title,
  subtitle,
  media,
  onClick,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={`eba-card uk-card ${color ? `uk-card-${color}` : ''} ${onClick ? 'uk-card-hover' : ''} uk-card-${size} ${className || ''}`} 
      onClick={onClick || (() => {})}
      {...props}
    >
      {
        media ? (
          <div className='uk-card-media-top'>
            <img src={media} />
          </div>
        ) : null
      }
      <div className='uk-card-body'>
        <h4 className='uk-card-title'>{title}</h4>
        { subtitle ? (
          <p className='uk-text-meta uk-margin-remove-top'> {subtitle} </p>
        ) : null }
        { children }
      </div>
    </div>
  )
};

Card.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary', 'muted']),
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  media: PropTypes.string
}

export default Card;