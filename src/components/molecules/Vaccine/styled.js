import styled from 'styled-components';

import { Card } from '@components/molecules';

import Pond from '@assets/images/pond.svg';
import Houses from '@assets/images/houses.svg';

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 10;

  @media (min-width: 920px) {
    align-items: flex-start;
    padding: 230px 38px 80px;
  }

  @media (max-width: 919px) {
    align-items: center;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  height: 375px;
  position: relative;
  width: 400px;

  @media (min-width: 920px) {
    margin-left: 199px;
  }

  @media (max-width: 919px) {
    margin-left: 120px;
    margin-top: 200px;
    order: 1;
  }
`;

export const SVGStyle = {
  left: 0,
  position: 'absolute',
  top: 0,
};

export const StyledCard = styled(Card)`
  position: relative;
  z-index: 10;

  @media (min-width: 920px) {
    margin-left: 191px;
    margin-top: 36px;
  }

  @media (max-width: 919px) {
    order: 2;
  }
`;

export const StyledHouses = styled(Houses)`
  left: 191px;
  position: absolute;
  top: 65px;

  @media (max-width: 919px) {
    left: 91px;
  }
`;

export const TreesTwoStyle = {
  left: 778,
  position: 'absolute',
  top: 35,
};

export const TreesThreeStyle = {
  position: 'absolute',
  right: 323,
  top: -61,
};

export const StyledPond = styled(Pond)`
  position: absolute;

  @media (min-width: 920px) {
    right: 0;
    top: -95px;
  }

  @media (max-width: 919px) {
    left: 530px;
    top: 20px;
  }
`;

export const TreesThreeBottomStyle = {
  bottom: 86,
  left: 165,
  position: 'absolute',
  zIndex: 0,
};
