import styled from 'styled-components';

import { SocialLogo } from '@components/molecules';

export const Container = styled.section`
  background-color: #FFFFFF;
  padding: 12px 36px;

  @media (max-width: 800px) {
    padding: 30px 36px;
  }
`;

export const TitleContainer = styled.div`
padding: 2%;
  @media (min-width: 1200px) {
    margin-right: 80px;
  }
`;

export const Title = styled.h2`
  color: #064641;
  font-size: 30px;
  font-weight: 800; 

  @media (max-width: 1024px) {
    margin-bottom: 26px;
    text-align: center;
  }
`;

export const Subtitle = styled.h3`
  color: #007E60;
  font-weight: 800;
  font-size: 16px;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    margin-bottom: 18px;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;

  @media (min-width: 1025px) {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    max-width: 1120px;
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    display: flex;
    flex-direction: column;
  }
`;

export const StyledSocialLogo = styled(SocialLogo)`
  text-align: center;
  width: 100%;

  > div {
    justify-content: space-around;
    margin: 32px auto;
    width: 240px;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;
