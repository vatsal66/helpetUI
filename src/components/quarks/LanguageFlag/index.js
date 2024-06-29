import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, SelectedCirlce } from './styled';

const LanguageFlag = ({ selected, Svg, width, height, onClick }) => (
  <Wrapper width={width} height={height} onClick={onClick}>
    {selected && <SelectedCirlce />}
    <Svg width={width} height={height} />
  </Wrapper>
);

LanguageFlag.propTypes = {
  Svg: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

LanguageFlag.defaultProps = {
  width: 25,
  height: 25,
  selected: false,
};

export default LanguageFlag;
