import React from 'react'
import { Card1, CardHeader, CardHeaderName, CardMainTitle, CardSubName, CardSubTitle, ColRightSide, Container, SideBarTitle, SideBarTitleA, SideBarTitleLi, SideBarTitleUl, StartComponents, StyledContentSection } from './styled'

const HeaderPetId = () => {
  return (
    <div>
      <StyledContentSection>
        <Container>
          <StartComponents>
            <div>
              <SideBarTitle>Categorie</SideBarTitle>
              <SideBarTitleUl>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Curiosita (8)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Documenti (1)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Eventi (2)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Estate (1)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Features (3)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Notizie (2)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Nutrizione (2)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Salute e Benessere (23)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Uncategorized (1)</SideBarTitleA>
                </SideBarTitleLi>
                <SideBarTitleLi>
                  <SideBarTitleA href='#'>Viaggi (4)</SideBarTitleA>
                </SideBarTitleLi>
              </SideBarTitleUl>
            </div>
            <ColRightSide>
              <Card1>
                <img src='../assets/images/HomeBlog/Blog-1.svg' style={{borderRadius: '35px', height: 'auto', weight: 'auto'}}></img>
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
              <CardMainTitle>Cintura di sicurezza per cani:Che cos'e cosa dica la legge?</CardMainTitle>
              <CardSubTitle>Stai per intraprendere un viaggio in auto con il tuo pelosetto? Se non puoi farlo viaggiare nel vano bagagliaio, allora è bene assicurarti di utilizzare una cintura di sicurezza per cani in modo da ancorarlo ai sedili posteriori.</CardSubTitle>
            </ColRightSide>
          </StartComponents>
        </Container>

      </StyledContentSection>
    </div>
  )
}

export default HeaderPetId
