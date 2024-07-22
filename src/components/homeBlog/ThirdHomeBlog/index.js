import React from 'react';
import { Link } from 'gatsby';

import Blog3Svg from '@assets/images/HomeBlog/Blog3.png';
import Blog4Svg from '@assets/images/HomeBlog/Blog4.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import {
  CardHeader, CardHeaderName, CardMainTitle,
  CardSubName, CardSubTitle, ColRightSide,
  Container, DetailButton,
  SmallGraceStyle, StartComponents,
} from './styled';

const ThirdHomeBlog = () => {
  return (
    <Container>
      <StartComponents>
        <Link to="/homeBlogDetails" style={{ color: '#151515', textDecoration: 'none' }}>
          <ColRightSide>
            <div style={{ position: 'relative' }}>
              <img src={Blog3Svg} style={{ width: '100%', borderRadius: '35px' }} />
              <DetailButton>Viaggi</DetailButton>
            </div>
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
                <CardSubName>12</CardSubName>
              </CardHeaderName>
            </CardHeader>
            <CardMainTitle>Cane in Aereo: Quali sono le Regole 2023 e i Consigli</CardMainTitle>
            <CardSubTitle>Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?</CardSubTitle>
          </ColRightSide>
        </Link>
      </StartComponents>
      <StartComponents>
        <Link to="/homeBlogDetails" style={{ color: '#151515', textDecoration: 'none' }}>
          <ColRightSide>
            <div style={{ position: 'relative' }}>
              <img src={Blog4Svg} style={{ width: '100%', borderRadius: '35px' }} />
              <DetailButton>Viaggi</DetailButton>
            </div>
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
                <CardSubName>12</CardSubName>
              </CardHeaderName>
            </CardHeader>
            <CardMainTitle>
              <div>
              Dove Andare in Vacanza con il Cane:
              </div>
              <div>
              le 10 Migliori Mete in Italia e in Europa
              </div>
            </CardMainTitle>
            <CardSubTitle>Se sei un amante degli animali e desideri trascorrere le tue vacanze in compagnia del tuo fedele amico a quattro zampe, allora...</CardSubTitle>
          </ColRightSide>
        </Link>
      </StartComponents>
      <SmallGrace style={SmallGraceStyle}/>
    </Container>
  );
};

export default ThirdHomeBlog;
