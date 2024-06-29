import styled from 'styled-components';

import { Card } from '@components/molecules';

import Building from '@assets/images/building.svg';
import Tree from '@assets/images/trees-1.svg';

export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  padding: 82px 38px 80px;
  position: relative;

  @media (max-width: 919px) {
    align-items: center;
    flex-direction: column;
    margin-top: -60px;
    padding: 0;
  }
`;

export const ImageContainer = styled.div`
  height: 375px;
  position: relative;
  width: 400px;

  @media (min-width: 920px) {
    margin-left: 200px;
    margin-top: 10px;
  }

  @media (max-width: 919px) {
    margin-left: 90px;
    order: 1;
  }
`;

export const SVGStyle = {
  left: 0,
  position: 'absolute',
  top: 0,
};

export const StyledCard = styled(Card)`
  @media (min-width: 920px) {
    margin-left: 35px;
    margin-top: 40px;
  }

  @media (max-width: 919px) {
    order: 2;
  }
`;

export const StyledTree = styled(Tree)`
  position: absolute;

  @media (min-width: 920px) {
    left: 488px;
    top: -15px;
  }

  @media (max-width: 919px) {
    top: 35px;
    right: 460px;
  }
`;

export const StyledBuilding = styled(Building)`
  @media (max-width: 919px) {
    display: none;
  }
`;
