import styled, { css, keyframes } from 'styled-components';

import SmallCloud from '@assets/images/cloud-small.svg';
import BigCloud from '@assets/images/cloud-big.svg';

const leftToRight = keyframes`
  0% {
    left: calc(-5% - 160px);
  }
  100% {
    left: calc(105% + 160px);
  }
`;

const rightToLeft = keyframes`
  0% {
    right: calc(-5% - 160px);
  }
  100% {
    right: calc(105% + 160px);
  }
`;

export const ImagesContainer = styled.div`
  bottom: 0;
  height: 220px;
  position: absolute;
  width: 1360px;

  svg {
    position: absolute;
  }

  @media (max-width: 799px) {
    max-width: 799px;
  }
`;

export const StyledSmallCloud = styled(SmallCloud)`
  position: absolute;
  top: ${({ top }) => top};
  animation-duration: ${({ duration }) => duration}s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @media (max-width: 375px) {
    animation-duration: ${({ duration }) => duration / 6}s;
  }

  @media (min-width: 376px and max-width: 559px) {
    animation-duration: ${({ duration }) => duration / 5}s;
  }

  @media (min-width: 560px and max-width: 919px) {
    animation-duration: ${({ duration }) => duration / 3}s;
  }

  ${({ left }) =>
    left &&
    css`
      animation-name: ${leftToRight};
      left: calc(-5% - 130px);
    `}

  ${({ right }) =>
    right &&
    css`
      animation-name: ${rightToLeft};
      right: calc(-5% - 130px);
    `}
`;

export const StyledBigCloud = styled(BigCloud)`
  position: absolute;
  top: ${({ top }) => top};
  animation-duration: ${({ duration }) => duration}s;
  animation-direction: alternate;
  animation-iteration-count: infinite;

  @media (max-width: 375px) {
    animation-duration: ${({ duration }) => duration / 8}s;
  }

  @media (min-width: 376px and max-width: 559px) {
    animation-duration: ${({ duration }) => duration / 5}s;
  }

  @media (min-width: 560px and max-width: 919px) {
    animation-duration: ${({ duration }) => duration / 3}s;
  }

  ${({ left }) =>
    left &&
    css`
      animation-name: ${leftToRight};
      left: calc(-5% - 160px);
    `}

  ${({ right }) =>
    right &&
    css`
      animation-name: ${rightToLeft};
      right: calc(-5% - 160px);
    `}
`;

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(../assets/images/NoPageFound.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 724px;
  min-width: 100%;
  padding: 236px 0 0 0;

  @media (max-width: 799px) {
    min-height: 0;
    padding-bottom: 160px;
  }
`;

export const HomeButton = styled.button`
  font-size: 20px;
  font-weight: 700;
  border-radius: 90px;
  padding: 19px 24px;
  background: #44D3A8;
  border: 5px solid #007E60;
  height: fit-content;
  margin: auto 0 73px 0;
  cursor: pointer;
`;