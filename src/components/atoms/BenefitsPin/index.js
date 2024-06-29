import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Description } from './styled';

const BenefitsPin = ({ SVG, title, description }) => (
  <Container>
    <SVG />
    <Title>{title}</Title>
    <Description>{description}</Description>
  </Container>
);

BenefitsPin.propTypes = {
  SVG: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BenefitsPin;
