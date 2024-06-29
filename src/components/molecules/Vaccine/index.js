import React from 'react';

import { AnimationWrapper } from '@components/quarks';

import useScrollAnimation from '@hooks/useScrollAnimation';

import Hospital from '@assets/images/hospital.svg';
import HospitalColor from '@assets/images/hospital-color.svg';
import TreesTwo from '@assets/images/trees-two.svg';
import TressThree from '@assets/images/trees-three.svg';

import {
  Container,
  ImageContainer,
  SVGStyle,
  StyledCard,
  StyledHouses,
  TreesTwoStyle,
  TreesThreeStyle,
  StyledPond,
  TreesThreeBottomStyle,
} from './styled';

const Vaccine = () => {
  const [ref, animated] = useScrollAnimation();

  return (
    <Container>
      <StyledCard ref={ref} animated={animated} card="vaccine" />
      <ImageContainer>
        <Hospital width={376} style={SVGStyle} />
        <AnimationWrapper animated={animated}>
          <HospitalColor width={376} style={SVGStyle} />
        </AnimationWrapper>
      </ImageContainer>
      <StyledHouses width={407} />
      <TreesTwo width={128} style={TreesTwoStyle} />
      <TressThree width={115} style={TreesThreeStyle} />
      <StyledPond width={224} />
      <TressThree width={149} style={TreesThreeBottomStyle} />
    </Container>
  );
};

export default Vaccine;
