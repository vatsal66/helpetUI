import React from 'react';

import Blog3Svg from '@assets/images/HomeBlog/Blog2.svg';
import Blog4Svg from '@assets/images/HomeBlog/Blog2.svg';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import { Card1, CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, StartComponents, StyledContentSection } from './styled';

const ThirdHomeBlog = () => {
  return (
    <StyledContentSection>
      <Container>
        <StartComponents>
          <ColRightSide>
            <Card1>
              <Blog3Svg style={{ width: '100%', borderRadius: '35px' }} />
            </Card1>
            <CardHeader>
              <CardHeaderName>
                <Icon1Svg />
                <CardSubName>Agosto 4, 2023</CardSubName>
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
            <CardMainTitle>Cintura di sicurezza per cani:Che cose cosa dica la legge?</CardMainTitle>
            <CardSubTitle>Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?</CardSubTitle>
          </ColRightSide>
        </StartComponents>
        <StartComponents>
          <ColRightSide>
            <Card1>
              <Blog4Svg style={{ width: '100%', borderRadius: '35px' }} />
            </Card1>
            <CardHeader>
              <CardHeaderName>
                <Icon1Svg />
                <CardSubName>Agosto 4, 2023</CardSubName>
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
            <CardMainTitle>Dove Andare in Vacanza con il Cane: le 10 Migliori Mete in Italia e in Europa</CardMainTitle>
            <CardSubTitle>Se sei un amante degli animali e desideri trascorrere le tue vacanze in compagnia del tuo fedele amico a quattro zampe, allora...</CardSubTitle>
          </ColRightSide>
        </StartComponents>
      </Container>
    </StyledContentSection>
  );
};

export default ThirdHomeBlog;
