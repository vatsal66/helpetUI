import styled from 'styled-components';

import { Card } from '@components/molecules';

import Trees from '@assets/images/trees-2.svg';

export const Container = styled.div`
  display: flex;
  position: relative;
  z-index: 10;

  @media (min-width: 920px) {
    align-items: flex-start;
    padding: 120px 38px 80px;
  }

  @media (max-width: 919px) {
    align-items: center;
    flex-direction: column;
    margin-top: 120px;
  }
`;

export const ImageContainer = styled.div`
  height: 375px;
  position: relative;
  width: 400px;

  @media (min-width: 920px) {
    margin-left: 145px;
  }

  @media (max-width: 919px) {
    margin-left: -70px;
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
    margin-left: 195px;
    margin-top: 65px;
  }
`;

export const StyledTrees = styled(Trees)`
  position: absolute;
  top: 0;

  @media (min-width: 920px) {
    left: 265px;
  }

  @media (max-width: 919px) {
    left: 435px;
  }
`;

export const CafeStyle = {
  position: 'absolute',
  right: 275,
  top: 85,
  zIndex: 0,
};
