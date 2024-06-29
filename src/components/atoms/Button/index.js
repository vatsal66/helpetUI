import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styled';

const Button = ({
  className,
  children,
  padding,
  color,
  backgroundColor,
  upperCase,
  round,
  onClick,
  disabled,
  as,
}) => (
  <StyledButton
    {...{
      className,
      color,
      backgroundColor,
      padding,
      round,
      disabled,
      onClick,
      as,
    }}
  >
    {upperCase ? children.toUpperCase() : children}
  </StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  padding: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  upperCase: PropTypes.bool,
  round: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: null,
  color: null,
  backgroundColor: null,
  upperCase: false,
  round: true,
  disabled: false,
  padding: null,
};

export default Button;
