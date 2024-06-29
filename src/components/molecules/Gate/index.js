import React from 'react';

import GateImage from '@assets/images/gate.svg';
import Door from '@assets/images/door.svg';
import DoglessDoor from '@assets/images/dogless-door.svg';
import CatHead from '@assets/images/cat-head.svg';

import { Container, DoorStyle, HeadStyle } from './styled';

const Gate = ({ showDog = true }) => (
  <Container>
    <GateImage />
    {showDog ? <Door style={DoorStyle} /> : <DoglessDoor style={DoorStyle} />}
    <CatHead width={68} style={HeadStyle} />
  </Container>
);

export default Gate;
