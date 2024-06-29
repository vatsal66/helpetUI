import styled, { css, keyframes } from 'styled-components';

import PetHouse from '@assets/images/pet-house.svg';
import HeaderGrassLeft from '@assets/images/header-grass-left.svg';
import HeaderLightGrassRight from '@assets/images/header-light-grass-right.svg';
import Cat from '@assets/images/cat.svg';
import HeaderGrassRight from '@assets/images/header-grass-right.svg';
import HeaderLightGrassLeft from '@assets/images/header-light-grass-left.svg';
import SmallCloud from '@assets/images/cloud-small.svg';
import BigCloud from '@assets/images/cloud-big.svg';

export const CallToAction = styled.h2`
  && {
    margin-top: 0;
  }
`;

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  background-image: url(./assets/images/header-background2.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  min-height: 900px;
  min-width: 100%;
  padding: 18px 0;

  @media (max-width: 799px) {
    min-height: 0;
    padding-bottom: 160px;
  }
`;

export const StyledContentSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 42px;
  width: 1120px;
  max-width: 100%;
  z-index: 10;
`;

export const FlagsContainer = styled.div`
  padding: 0 32px;
  width: 100%;

  & > * + * {
    margin-left: 12px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 720px;
  text-align: center;

  & > * + * {
    margin-top: 20px;
  }

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
  color: ${({ theme }) => theme.colors.title};
  font-size: 42px;
  font-weight: 600;

  @media (max-width: 799px) {
    font-size: 36px;
  }
`;

export const Subtitle = styled.h2`
  max-width: 70%;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 20px;
  font-weight: 400;

  @media (max-width: 799px) {
    font-size: 16px;
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

export const StyledHeaderGrassLeft = styled(HeaderGrassLeft)`
  bottom: -40px;
  left: 163px;
  z-index: 10;

  @media (max-width: 799px) {
    left: 70px;
  }
`;

export const StyledHeaderLightGrassLeft = styled(HeaderLightGrassLeft)`
  bottom: -60px;
  left: 145px;
  z-index: 11;

  @media (max-width: 799px) {
    left: 52px;
  }
`;

export const StyledHeaderGrassRight = styled(HeaderGrassRight)`
  bottom: -60px;
  right: 0;
  z-index: 10;

  @media (max-width: 799px) {
    right: 85px;
  }
`;

export const StyledHeaderLightGrassRight = styled(HeaderLightGrassRight)`
  bottom: -100px;
  right: 25px;
  z-index: 100;

  @media (max-width: 799px) {
    right: 80px;
  }
`;

const showHideCat = keyframes`
  0% {
    top: -7px;
  }
  25% {
    top: 53px;
  }
  50% {
    top: 53px;
  }
  50% {
    top: -7px;
  }
  100% {
    top: -7px;
  }
`;

export const StyledCat = styled(Cat)`
  top: -7px;
  right: 105px;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  animation-delay: 2s;
  animation-name: ${showHideCat};
  animation-timing-function: ease-in-out;

  @media (max-width: 799px) {
    right: 195px;
  }
`;

export const StyledPetHouse = styled(PetHouse)`
  bottom: -90px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;

  @media (max-width: 799px) {
    display: none;
  }
`;

export const PetHouseBg = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGreenBackground};
  bottom: -54px;
  left: 50%;
  height: 150px;
  transform: translateX(-50%);
  position: absolute;
  width: 150px;
  z-index: 1;

  @media (max-width: 799px) {
    display: none;
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
