import React, { useState } from 'react';
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

import Collapse from '@assets/images/Footer/collapse.svg'
import Expand from '@assets/images/Footer/expand.svg'

const Footer = () => {
  const { messages } = useIntl();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div id="footer">
      <ContentWrapper>
        <Content>
          <StyledSocialLogo />
          <Center>
            <Text>{messages['footer.description']}</Text>
            <ContactWrapper>
              <Contact>
                <p style={{
                    color: '#000000',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1.7,
                }}>{messages['footer.contact']}</p>
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
              Chi siamo
              {isExpanded ? (
                <Collapse />
              ) : (
                <Collapse />
              )}
            {isExpanded && (
              <ul>
                <li><Link href="#">Storia</Link></li>
                <li><Link href="#">Mission</Link></li>
                <li><Link href="#">Valori</Link></li>
                <li><Link href="#">Team</Link></li>
              </ul>
            )}
            <Link href="#">Servizi</Link>
            <Link href="#">My Insurance</Link>
            <Link href="#">Pet ID</Link>
            <Link href="#">Libretto sanitario</Link>
            <Link href="#">Near me</Link>
            <Link href="#">Account</Link>
            <Link href="#">Supporto</Link>
          </Right>
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
