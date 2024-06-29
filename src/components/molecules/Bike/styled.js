import styled from 'styled-components';

import Bike from '@assets/images/bike.svg';

export const BaseBike = styled(Bike)`
  display: ${({ active }) => (active ? 'auto' : 'none')};
  left: 50%;
  margin-left: -37.5px;
  z-index: 1000;
  position: absolute;
  @media (max-width: 919px) {
    display: none;
  }
`;

export const MovingBike = styled(BaseBike)`
  position: fixed;
  top: 50%;
  margin-top: -99px;
`;

export const InitialBike = styled(BaseBike)`
  margin-top: 90px;
`;
