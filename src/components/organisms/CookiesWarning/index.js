import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from 'styled-components';

import {
  Container,
  Text,
  StyledContentSection,
  ButtonContainer,
  CookiePolicyLink,
  StyledButton,
  RefuseCookieButton,
} from './styled';

const CookiesWarning = () => {
  const [show, setShow] = useState(false);
  const { messages } = useIntl();
  const theme = useTheme();

  useEffect(() => {
    if (!localStorage.getItem('acceptedCookies')) {
      setShow(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('acceptedCookies', 'true');
    setShow(false);
  };

  const handleRefuseCookies = () => {
    localStorage.setItem('acceptedCookies', 'false');
    setShow(false);
  };

  return (
    <Container show={show}>
      <StyledContentSection>
        <Text>
          {messages['cookies.warning']}{' '}
          <CookiePolicyLink
            href="/assets/pdfs/cookie-policy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            {messages['cookies.policyLink']}
          </CookiePolicyLink>
        </Text>
        <ButtonContainer>
          <StyledButton
            backgroundColor={theme.colors.white}
            onClick={handleAcceptCookies}
          >
            {messages['cookies.confirmButton']}
          </StyledButton>
          <RefuseCookieButton onClick={handleRefuseCookies}>
            {messages['cookies.refuseButton']}
          </RefuseCookieButton>
        </ButtonContainer>
      </StyledContentSection>
    </Container>
  );
};

export default CookiesWarning;
