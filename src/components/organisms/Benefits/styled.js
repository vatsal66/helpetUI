import styled from 'styled-components';

import { ContentSection } from '@components/quarks';

import MockPhonePng from '@assets/images/mock-app-phone.png';
import MockPhoneBackground from '@assets/images/mock-phone-background.svg';

export const CallToAction = styled.h2`
  margin-top: 60px;
  margin-bottom: 10px;
`;

export const StyledContentSection = styled(ContentSection)`
  padding: 96px 16px 118px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  max-width: ${({ maxWidth }) => maxWidth}px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.title};
  font-size: 28px;
  font-weight: 600;
`;

export const ColoredTitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 45px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 799px) {
    display: none;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex: 1;

  > svg {
    max-width: 100%;
  }
`;

export const MockPhone = styled.img.attrs({
  src: MockPhonePng,
})`
  max-width: 100%;
  position: relative;
  width: 210px;
  height: 425px;
  z-index: 10;

  @media (min-width: 800px) {
    position: absolute;
    transform: translateX(18px);
    width: 292px;
    height: auto;
  }
`;

export const PhoneBackground = styled(MockPhoneBackground)`
  @media (max-width: 799px) {
    bottom: -50px;
    position: absolute;
    width: 370px;
  }
`;
