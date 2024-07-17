/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import Blog2Svg from '@assets/images/HomeBlog/Blog2.svg';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import { CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, ImageWrapper, MainCard } from './styled';

const HeaderPetId = () => {
  return (
    <Container>
      <MainCard>
        <ImageWrapper>
          <Blog2Svg style={{ width: '100%', borderRadius: '35px' }} />
        </ImageWrapper>
        <ColRightSide>
          <CardHeader>
            <CardHeaderName>
              <Icon1Svg />
              <CardSubName>Luglio 18, 2023</CardSubName>
            </CardHeaderName>
            <CardHeaderName>
              <Icon2Svg />
              <CardSubName>helpetapp</CardSubName>
            </CardHeaderName>
            <CardHeaderName>
              <Icon3Svg />
              <CardSubName>0</CardSubName>
            </CardHeaderName>
          </CardHeader>
          <CardMainTitle>Passaporto per il Cane: Come Richiederlo, Quanto Costa e Quando Serve</CardMainTitle>
          <CardSubTitle>Stai per partire per un viaggio al di fuori dell'Italia con il tuo amico a quattro zampe? Lo sapevi che anche il tuo pelosetto ha bisogno del passaporto per oltrepassare i confini nazionali? All'interno di questa guida vediamo nel dettaglio che cos'è il passaporto per il cane, quando serve, quanto costa...</CardSubTitle>
        </ColRightSide>
      </MainCard>
    </Container>
  );
};

export default HeaderPetId;
