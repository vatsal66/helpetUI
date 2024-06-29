import React from 'react';
import { useIntl } from 'react-intl';

import {
  ContentWrapper,
  Content,
  Text,
  Right,
  FooterBottom,
  Link,
  Copyright,
  StoreIcon,
  IconsWrapper,
  Label,
  StyledApple,
  StyledPlay,
  StyledSocialLogo,
  Center,
  ContactWrapper,
  Contact,
} from './styled';

const Footer = () => {
  const { messages } = useIntl();

  return (
    <div id="footer">
      <ContentWrapper>
        <Content>
          <StyledSocialLogo />
          <Center>
            <Text>{messages['footer.description']}</Text>
            <ContactWrapper>
              <Contact>
                <Label>{messages['footer.contact']}</Label>
                <Text>Helpet Italia Srl</Text>
                <Text>Via Po 31D, 00198 Roma</Text>
                <Text>P.IVA 15386071003</Text>
              </Contact>
              <Contact>
                <Label>{messages['footer.support']}</Label>
                <Text>
                  <a href="mailto:info@helpetapp.com">info@helpetapp.com</a>
                </Text>
              </Contact>
            </ContactWrapper>
          </Center>
          <Right>
            <Label>Download</Label>
            <IconsWrapper>
              <StoreIcon href="https://apps.apple.com/us/app/id1515390307">
                <StyledApple height={23} />
              </StoreIcon>
              <StoreIcon href="https://play.google.com/store/apps/details?id=com.helpet">
                <StyledPlay height={32} />
              </StoreIcon>
            </IconsWrapper>
          </Right>
        </Content>
        <FooterBottom>
          <div>
            <Link
              href="/assets/pdfs/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages['footer.privacyPolicy']}
            </Link>
          </div>
          <Copyright>{messages['footer.copyright']}</Copyright>
          <div>
            <Link
              href="/assets/pdfs/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {messages['footer.terms']}
            </Link>
          </div>
        </FooterBottom>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
