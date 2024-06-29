import styled from 'styled-components';

import Path from '@assets/images/path.svg';
import Road from '@assets/images/road.svg';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  position: relative;
  z-index: 0;

  @media (min-width: 920px) {
    min-height: 2514px;
  }

  @media (max-width: 919px) {
    min-height: 3000px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1360px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media (min-width: 920px) {
    padding-top: 170px;
  }

  @media (max-width: 919px) {
    padding-top: 60px;
  }
`;

export const GateContainer = styled.div`
  z-index: 2000;
  margin: 0 auto;
  max-width: 1360px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);

  @media (min-width: 920px) {
    padding-top: 170px;
  }

  @media (max-width: 919px) {
    padding-top: 60px;
  }
`;

export const StyledRoad = styled(Road)`
  position: absolute;

  @media (min-width: 920px) {
    top: 475px;
  }

  @media (max-width: 919px) {
    left: -220px;
    top: 526px;
  }
`;

export const GrassStyle = {
  left: 70,
  position: 'absolute',
  top: 105,
};

export const StyledPath = styled(Path)`
  left: 50%;
  position: absolute;
  top: -120px;
  transform: translateX(-50%);

  @media (max-width: 919px) {
    display: none;
  }
`;

export const RocksStyle = {
  left: 520,
  position: 'absolute',
  top: 30,
};
