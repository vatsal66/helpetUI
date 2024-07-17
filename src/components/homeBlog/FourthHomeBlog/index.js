import React from 'react';

import Blog2Svg from '@assets/images/HomeBlog/Blog2.svg';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import { CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, ImageWrapper, MainCard } from './styled';

const FourthHomeBlog = () => {
  return (
    <>
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
            <CardMainTitle>Viaggiare con il Cane e con il Gatto: i Documenti e Consigli Utili</CardMainTitle>
            <CardSubTitle>L’estate è ormai alle porte e i nostri pelosetti non vedono l’ora di andare in vacanza insieme a noi. Tuttavia, è necessario avere cura di avere con sé i corretti documenti così come proteggersi dai rischi che potrebbero verificarsi nel corso delle nostre avventure.</CardSubTitle>
          </ColRightSide>

        </MainCard>
      </Container>
    </>
  );
};

export default FourthHomeBlog;
