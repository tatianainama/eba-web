import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ 
  color = 'default',
  size = 'large',
  className = '',
  tag: Tag = 'section',
  children,
  ...props
}) => {
  return (
    <Tag className={`uk-section uk-section-${color} uk-section-${size} ${className}`} {...props}>
      <div className="uk-container">
        { children }
      </div>
    </Tag>
  );
};

Section.propTypes = {
  color: PropTypes.oneOf(['default', 'muted', 'primary', 'secondary']),
  size: PropTypes.oneOf(['xsmall', 'small', 'large', 'xlarge', 'remove-vertical']),
  className: PropTypes.string,
  tag: PropTypes.string,
}
export default Section;