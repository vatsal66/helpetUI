import React from 'react';

import { AnimationWrapper } from '@components/quarks';

import useScrollAnimation from '@hooks/useScrollAnimation';

import House from '@assets/images/house.svg';
import HouseColor from '@assets/images/house-color.svg';

import {
  Container,
  ImageContainer,
  SVGStyle,
  StyledCard,
  StyledTree,
  StyledBuilding,
} from './styled';

const PetID = () => {
  const [ref, animated] = useScrollAnimation();

  return (
    <Container>
      <StyledBuilding width={156} height={264} />
      <StyledCard ref={ref} animated={animated} card="petId" />
      <StyledTree width={92} />
      <ImageContainer>
        <House width={400} style={SVGStyle} />
        <AnimationWrapper animated={animated}>
          <HouseColor width={400} style={SVGStyle} />
        </AnimationWrapper>
      </ImageContainer>
    </Container>
  );
};

export default PetID;
