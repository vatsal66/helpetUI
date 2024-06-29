import styled from 'styled-components';

import Arrow from '@assets/images/arrow.svg';

export const SliderWrapper = styled.div`
  max-width: 100%;
  position: relative;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  > div {
    width: 100%;
  }
`;

export const NavContainer = styled.div`
  bottom: -43px;
  display: flex;
  height: 100px;
  justify-content: space-between;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: 280px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
`;

export const LeftArrow = styled(Arrow)`
  transform: scale(-1);
`;
