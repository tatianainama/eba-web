import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  color,
  size = 'small',
  title,
  subtitle,
  media,
  onClick,
  children,
  ...props
}) => {
  return (
    <div
      className={`uk-card ${color ? `uk-card-${color}` : ''} ${onClick ? 'uk-card-hover' : ''} uk-card-${size}`} 
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
        <h3 className='uk-card-title'>{title}</h3>
        { subtitle ? (
          <p className='uk-text-meta uk-margin-remove-top'> {subtitle} </p>
        ) : null }
        { children }
      </div>
    </div>
  )
};

Card.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'large']),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  media: PropTypes.string
}

export default Card;