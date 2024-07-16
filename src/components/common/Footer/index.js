import React, { useState } from 'react';

import Collapse from '@assets/images/Footer/collapse.svg';
import Expand from '@assets/images/Footer/expand.svg';

import {
  ContentWrapper,
  Content,
  Text,
  TextInside,
  FooterBottom,
  Copyright,
  CopyrightDetails,
  StoreIcon,
  IconsWrapper,
  StyledApple,
  StyledPlay,
  StyledSocialLogo,
  Center,
  ContactWrapper,
  Contact,
  DropDownList,
} from './styled';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2);
  };

  return (
    <div id="footer" style={{
      background: '#ffffff',
      position: 'relative',
      zIndex: 2,
    }}>
      <ContentWrapper>
        <Content>
          <StyledSocialLogo />
          <Center>
            <Text>
              <div>
                <div>
                  Helpet crea soluzioni innovative per rendere la vita
                </div>
                <div>
                  più facile agli amanti di cani e gatti.
                </div>
              </div>
            </Text>
            <ContactWrapper>
              <Contact>
                <p style={{
                  color: '#000000',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '28.37px',
                }}>MAPPA DEL SITO</p>
                <div>
                  <Text>Chi siamo</Text>
                  <Text>
                    <div onClick={() => handleToggle()} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      {isExpanded
                        ? <Expand />
                        : <Collapse />}
                      Servizi
                    </div>
                    {isExpanded && (
                      <div>
                        <DropDownList>My Insurance</DropDownList>
                        <DropDownList>Pet ID</DropDownList>
                        <DropDownList>Libretto sanitario</DropDownList>
                        <DropDownList>Near me</DropDownList>
                      </div>
                    )}
                  </Text>
                  <Text>Account</Text>
                  <Text>Supporto</Text>
                  <Text><div onClick={() => handleToggle2()} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {isExpanded2
                      ? <Expand />
                      : <Collapse />}
                    Note legali
                  </div>
                  {isExpanded2 && (
                    <div>
                      <DropDownList>Informativa sulla Privacy</DropDownList>
                      <DropDownList>Termini di utilizzo</DropDownList>
                    </div>
                  )}
                  </Text>
                </div>
              </Contact>
              <Contact>
                <p style={{
                  color: '#000000',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '28.37px',
                }}>MAPPA DEL SITO</p>
                <div>
                  <Text>Sede</Text>
                  <TextInside>Helpet Italia Srl</TextInside>
                  <TextInside>Via Po 31D, 00198 Roma</TextInside>
                  <TextInside>P.IVA 15386071003</TextInside>
                </div>
                <div>
                  <Text>Info</Text>
                  <TextInside>info@helpetapp.com</TextInside>
                  <TextInside>+39 000 0000 000</TextInside>
                </div>
              </Contact>
              <Contact>
                <p style={{
                  color: '#000000',
                  fontSize: '20px',
                  fontWeight: 700,
                  lineHeight: '28.37px',
                }}>DOWNLOAD</p>
                <IconsWrapper>
                  <StoreIcon href="https://apps.apple.com/us/app/id1515390307">
                    <StyledApple height={23} />
                  </StoreIcon>
                  <StoreIcon href="https://play.google.com/store/apps/details?id=com.helpet">
                    <StyledPlay height={32} />
                  </StoreIcon>
                </IconsWrapper>
              </Contact>
            </ContactWrapper>
          </Center>
        </Content>
        <FooterBottom>
          <Copyright>All Copyrights reserved - HelpetApp@2020</Copyright>
          <CopyrightDetails>
            Helpet Srl – Sede Legale Viale Volga snc – Cap. 70132 –  Bari – Soc. 10.000,00 € – Reg. Imp. di Bari al n. BA - 633972 – C.F: 15386071003 – Partita IVA 15386071003 – PEC: helpetitalia@legalmail.it – Società soggetta al controllo di IVASS, iscritta al R.U.I con il codice E000728380 e si avvale per l’attività assicurativa e la compliance di J&B Broker Srls, società soggetta al controllo di IVASS, iscritta al R.U.I con il codice B000619911. – ©2023.
          </CopyrightDetails>
        </FooterBottom>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
