import React from 'react';

import { Card1, CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, StartComponents, StyledContentSection } from './styled';

const ThirdHomeBlog = () => {
  return (
    <StyledContentSection>
      <Container>
        <StartComponents>
          <ColRightSide>
            <Card1>
              <img src='../assets/images/HomeBlog/Blog-3.svg' style={{ borderRadius: '35px' }}></img>
            </Card1>
            <CardHeader>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-1.svg'></img>
                <CardSubName>Agosto 4, 2023</CardSubName>
              </CardHeaderName>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-2.svg'></img>
                <CardSubName>helpetapp</CardSubName>
              </CardHeaderName>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-3.svg'></img>
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
              <img src='../assets/images/HomeBlog/Blog-4.svg' style={{ borderRadius: '35px', height: 'auto', weight: 'auto' }}></img>
            </Card1>
            <CardHeader>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-1.svg'></img>
                <CardSubName>Agosto 4, 2023</CardSubName>
              </CardHeaderName>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-2.svg'></img>
                <CardSubName>helpetapp</CardSubName>
              </CardHeaderName>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-3.svg'></img>
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
