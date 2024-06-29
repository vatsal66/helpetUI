import React from 'react';

import { AnimationWrapper } from '@components/quarks';

import useScrollAnimation from '@hooks/useScrollAnimation';

import Pharmacy from '@assets/images/pharmacy.svg';
import PharmacyColor from '@assets/images/pharmacy-color.svg';
import Cafe from '@assets/images/cafe.svg';

import {
  Container,
  ImageContainer,
  SVGStyle,
  StyledCard,
  StyledTrees,
  CafeStyle,
} from './styled';

const Prescription = () => {
  const [ref, animated] = useScrollAnimation();

  return (
    <Container>
      <ImageContainer>
        <Pharmacy width={368} style={SVGStyle} />
        <AnimationWrapper animated={animated}>
          <PharmacyColor width={368} style={SVGStyle} />
        </AnimationWrapper>
      </ImageContainer>
      <StyledCard ref={ref} animated={animated} card="prescription" />
      <StyledTrees width={103} />
      <Cafe width={265} style={CafeStyle} />
    </Container>
  );
};

export default Prescription;
