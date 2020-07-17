import React from 'react';
import { Link as NavLink } from '@reach/router';

const Link = (props) => (
  <NavLink
    {...props}
    getProps={({ isCurrent }) => {
      return {
        className: isCurrent ? 'eba-active' : ''
      }
    }}
  >
  </NavLink>
);

export default Link;