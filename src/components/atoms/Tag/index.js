import React from 'react';
import PropTypes from 'prop-types';

import { StyledTag } from './styled';

const Tag = ({ color, children }) => {
  return <StyledTag color={color}>{children}</StyledTag>;
};

Tag.propTypes = {
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Tag;
