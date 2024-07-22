/* eslint-disable no-irregular-whitespace */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';

import Blog2Svg from '@assets/images/HomeBlog/Blog2.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import { CardDetails, CardHeader, CardHeaderName,
  CardMainTitle, CardSubName, CardSubTitle,
  ColRightSide, Container, DetailButton, LeftCardSide,
  MainCard, SmallGraceStyle,
} from './styled';

const SecondHomeBlog = () => {
  return (
    <Container>
      <Link to="/homeBlogDetails" style={{ color: '#151515', textDecoration: 'none' }}>
        <MainCard>
          <LeftCardSide>
            <img src={Blog2Svg} style={{ height: '100%', borderRadius: '35px' }} />
            <DetailButton>Documenti</DetailButton>
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

      <SmallGrace style={SmallGraceStyle}/>
    </Container>
  );
};

export default SecondHomeBlog;
