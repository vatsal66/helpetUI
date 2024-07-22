import React from 'react';
import { Link } from 'gatsby';

const LinkComponent = ({ routes, children }) => {
  return (
    <Link to={routes} style={{ color: '#151515', textDecoration: 'none' }}>
      {children}
    </Link>
  );
};

export default LinkComponent;
