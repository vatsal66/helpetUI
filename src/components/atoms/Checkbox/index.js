import React from 'react';
import PropTypes from 'prop-types';

import theme from '@styles/theme';

import { StyledLabel, StyledInput, StyledSpan } from './styled';

const Checkbox = ({
  style,
  labelStyle,
  label,
  labelFontSize,
  labelColor,
  uncheckedColor,
  checkedColor,
  onClick,
}) => (
  <StyledLabel
    style={labelStyle}
    labelFontSize={labelFontSize}
    labelColor={labelColor}
  >
    {label}
    <StyledInput type="checkbox" onClick={onClick} checkedColor={checkedColor} />
    <StyledSpan style={style} uncheckedColor={uncheckedColor} />
  </StyledLabel>
);

Checkbox.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  label: PropTypes.string.isRequired,
  uncheckedColor: PropTypes.string,
  checkedColor: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  style: {},
  labelStyle: {},
  labelColor: null,
  labelFontSize: 16,
  uncheckedColor: theme.colors.white,
  checkedColor: theme.colors.primary,
};

export default Checkbox;
