import React, { useState } from 'react';

import {
  PetID,
  Prescription,
  Vaccine,
  Gate,
  Bike,
} from '@components/molecules';

import Fence from '@assets/images/fence.svg';
import GrassBg from '@assets/images/grass-bg.svg';
import Rocks from '@assets/images/rocks.svg';

import {
  Container,
  ContentWrapper,
  StyledRoad,
  GrassStyle,
  StyledPath,
  RocksStyle,
  GateContainer,
} from './styled';

const Main = () => {
  const [showDog, setShowDog] = useState(false);
  return (
    <Container className="main-section">
      <Bike {...{ setShowDog }} />
      <ContentWrapper>
        <Fence width={1360} />
        <PetID />
        <Prescription />
        <Vaccine />
        <GrassBg width={1244} style={GrassStyle} />
        <StyledRoad width={1360} />
        <StyledPath width={80} />
        <Rocks width={568} style={RocksStyle} />
      </ContentWrapper>
      <GateContainer>
        <Gate {...{ showDog }} />
      </GateContainer>
    </Container>
  );
};

export default Main;
