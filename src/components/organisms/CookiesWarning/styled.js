import styled from 'styled-components';

import { ContentSection } from '@components/quarks';
import { Button } from '@components/atoms';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: 28px 0;
  position: fixed;
  transition: bottom 0.5s ease-in-out;
  transition-delay: ${({ show }) => (show ? '2' : '0')}s;
  width: 100%;
  z-index: 2000;

  @media (min-width: 920px) {
    bottom: ${({ show }) => (show ? '0' : '-100%')};
  }

  @media (max-width: 919px) {
    border-radius: 20px;
    bottom: 2%;
    max-width: 396px;
    opacity: ${({ show }) => (show ? '1' : '0')};
    right: 2%;
    padding: 16px;
    transition: opacity 0.5s ease;
    transition-delay: ${({ show }) => (show ? '2' : '0')}s;
    visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  }

  @media (max-width: 411px) {
    right: 50%;
    transform: translateX(50%);
    max-width: 96%;
  }
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;

  @media (min-width: 920px) {
    max-width: 540px;
  }

  @media (max-width: 919px) {
    font-size: 13px;
    margin-bottom: 32px;
  }
`;

export const StyledContentSection = styled(ContentSection)`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (max-width: 919px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 919px) {
    flex-direction: row;
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 50px;
  font-size: 18px;
  font-weight: 400;
  height: 60px;
  letter-spacing: 1px;
  width: 260px;
  color: ${({ theme }) => theme.colors.primary};
  transition: all 200ms ease-out;

  @media (min-width: 780px) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.lightButton};
      color: ${({ theme }) => theme.colors.white};
    }
  }

  @media (max-width: 411px) {
    width: auto;
  }
`;

export const CookiePolicyLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
`;

export const RefuseCookieButton = styled(Button)`
  margin-top: 10px;
  text-decoration: underline;
`;
