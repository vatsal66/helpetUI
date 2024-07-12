import React from 'react'
import { Card1, CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, ImageWrapper, MainCard, StartComponents, StyledContentSection } from './styled'


const FourthHomeBlog = () => {
  return (
    <>
      <Container>
        <MainCard>
          <ImageWrapper>
            <img src="../assets/images/HomeBlog/Blog-2.svg" alt="Dog with passport" style={{ width: '100%', height: 'auto' }} />
          </ImageWrapper>
          <ColRightSide>
            <CardHeader>
              <CardHeaderName>
                <img src='../assets/images/HomeBlog/Icon-1.svg'></img>
                <CardSubName>Luglio 18, 2023</CardSubName>
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
            <CardMainTitle>Viaggiare con il Cane e con il Gatto: i Documenti e Consigli Utili</CardMainTitle>
            <CardSubTitle>L’estate è ormai alle porte e i nostri pelosetti non vedono l’ora di andare in vacanza insieme a noi. Tuttavia, è necessario avere cura di avere con sé i corretti documenti così come proteggersi dai rischi che potrebbero verificarsi nel corso delle nostre avventure.</CardSubTitle>
          </ColRightSide>

        </MainCard>
      </Container>
			<img src='../assets/images/HomeBlog/Road.svg' style={{}}></img>
    </>
  )
}

export default FourthHomeBlog
