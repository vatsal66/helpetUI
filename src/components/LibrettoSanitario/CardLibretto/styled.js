import styled, { css, keyframes } from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 799px) {
    padding: 0 16px;
    max-width: 100%;

    > svg {
      margin-top: 32px;
      width: 140px;
    }
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.19px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`;
export const Subtitle = styled.h2`
  color: #343434;
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  padding: 0 125px 0 0;
  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url('../assets/images/Slider1.svg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 521px;
  min-width: 100%;

  @media (max-width: 799px) {
    min-height: 0;
    padding-bottom: 160px;
  }
`;

export const Thirdtitle = styled.h2`
  text-align: center;
`
