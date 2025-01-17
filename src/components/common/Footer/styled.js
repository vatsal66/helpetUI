import styled from 'styled-components';

import { SocialLogo } from '@components/molecules';

import Apple from '@assets/icons/apple_icon.svg';
import Play from '@assets/icons/play_icon.svg';

export const ContentWrapper = styled.div`
  max-width: 1300px;
  padding-top: 40px;

  @media (min-width: 800px) {
    margin: 0 auto 0;
  }

  @media (max-width: 799px) {
    padding: 50px 36px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export const Center = styled.div`
  @media (min-width: 1024px) {
    padding: 0 15% 0 0;
    min-width: 950px;
  }

  @media (min-width: 800px) and (max-width: 1023px) {
    padding: 0 32px;
  }

  @media (max-width: 799px) {
    margin-bottom: 32px;
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.7;
`;

export const DropDownList = styled.p`
  color: #343434;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 15px;
`;

export const TextInside = styled.p`
  color: #343434;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

export const Right = styled.div`
  min-width: 161px;
  width: 16%;

  @media (max-width: 799px) {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    max-width: 375px;
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.fill};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  margin-top: 56px;
  padding: 25px 16px;
  gap: 5px;

  @media (max-width: 567px) {
    align-items: center;
    flex-direction: column;

    > div {
      margin: 8px 0;
    }
  }

  @media (max-width: 799px) {
    padding: 25px 0;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const Copyright = styled.div`
  color: #000000;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
`;

export const CopyrightDetails = styled.div`
  color: ${({ theme }) => theme.colors.description};
  font-weight: 700;
  font-size: 12px;
  display: flex;
  justify-content: center;
  padding: 0 10%;
`;

export const StoreIcon = styled.a`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  display: flex;
  height: 66px;
  justify-content: center;
  width: 66px;

  svg {
    position: relative;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 20px;
  @media (max-width: 799px) {
    > a {
      margin: 0 16px;
    }
  }
`;

export const Label = styled.div`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledApple = styled(Apple)`
  top: -3px;
`;

export const StyledPlay = styled(Play)`
  left: 3px;
`;

export const StyledSocialLogo = styled(SocialLogo)`
  @media (max-width: 799px) {
    display: none;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 799px) {
    flex-wrap: wrap;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 799px) {
    width: 100%;
  }
`;
