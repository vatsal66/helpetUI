import React from 'react';
import { useIntl } from 'react-intl';

import { NewsletterForm } from '@components/molecules';

import {
  Container,
  TitleContainer,
  Title,
  Subtitle,
  ContentWrapper,
  StyledSocialLogo,
} from './styled';

const Newsletter = () => {
  const { messages } = useIntl();

  return (
    <>
      <StyledSocialLogo />
      <Container>
        <ContentWrapper>
          <TitleContainer>
            <Title>Newsletter Helpet</Title>
            <Subtitle>{messages['newsletter.subtitle']}</Subtitle>
          </TitleContainer>
          <NewsletterForm />
        </ContentWrapper>
      </Container>
    </>
  );
};

export default Newsletter;
