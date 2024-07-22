/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';

import Blog5Svg from '@assets/images/HomeBlog/Blog5.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';
import LeftRoad from '@assets/images/PetId/LeftRoadCarousel.png';

import { CardDetails, CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, DetailButton, LeftCardSide, MainCard } from './styled';

const FifthHomeBlog = () => {
  return (
    <div style={{
      display: 'flex',
    }}>
      <img
        src={LeftRoad}
        style={{
          width: '10%',
          height: 'fit-content',
          margin: 'auto 0',
          position: 'relative',
          left: '5px',
        }} />
      <Container>
        <Link to="/homeBlogDetails" style={{ color: '#151515', textDecoration: 'none' }}>
          <MainCard>
            <LeftCardSide>
              <img src={Blog5Svg} style={{ height: '100%', borderRadius: '35px' }} />
              <DetailButton>Viaggi</DetailButton>
            </LeftCardSide>
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
              <CardDetails>
                <CardMainTitle>Passaporto per il Cane: Come Richiederlo, Quanto Costa e Quando Serve</CardMainTitle>
                <CardSubTitle>
                  <div>
                Stai per partire per un viaggio al di fuori dell’Italia con il tuo amico a quattro zampe? Lo sapevi che anche il tuo pelosetto ha bisogno del passaporto per oltrepassare i confini nazionali?
                  </div>
                  <div>
                All’interno di questa guida vediamo nel dettaglio che cos’è
                  </div>
                  <div>
                il passaporto per il cane, quando serve, quanto cosa...
                  </div>
                </CardSubTitle>
              </CardDetails>
            </ColRightSide>
          </MainCard>
        </Link>
        <img
          src={LeftRoad}
          style={{
            position: 'absolute',
            left: '-20%',
          }} />
      </Container>
      <div>
      </div>
    </div>
  );
};

export default FifthHomeBlog;
