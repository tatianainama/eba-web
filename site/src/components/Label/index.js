import React from 'react';
import './styles.css';

const Label = ({ color, children, ...props }) => (
  <span className={`uk-label uk-margin-small-right ${color ? `uk-label-${color}` : 'uk-label-default'}`} {...props} > { children } </span>
);

export default Label;