import React from 'react';

import Blog1Svg from '@assets/images/HomeBlog/Blog1.svg';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import {
  CardHeader, CardHeaderName,
  CardMainTitle, CardSubName, CardSubTitle,
  ColRightSide, SideBarTitle,
  SideBarTitleLi, SideBarTitleListHeader,
  StartComponents, StyledContentSection,
} from './styled';

const HeaderPetId = () => {
  return (
    <div style={{
      padding: '240px 0 0 0',
    }}>
      <StyledContentSection>
        <StartComponents>
          <div style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <SideBarTitle>Categorie</SideBarTitle>
            <SideBarTitleListHeader>
              <SideBarTitleLi>Curiosita (8)</SideBarTitleLi>
              <SideBarTitleLi>Documenti (1)</SideBarTitleLi>
              <SideBarTitleLi>Eventi (2)</SideBarTitleLi>
              <SideBarTitleLi>Estate (1)</SideBarTitleLi>
              <SideBarTitleLi>Features (3)</SideBarTitleLi>
              <SideBarTitleLi>Notizie (2)</SideBarTitleLi>
              <SideBarTitleLi>Nutrizione (2)</SideBarTitleLi>
              <SideBarTitleLi>Salute e Benessere (23)</SideBarTitleLi>
              <SideBarTitleLi>Uncategorized (1)</SideBarTitleLi>
              <SideBarTitleLi>Viaggi (4)</SideBarTitleLi>
            </SideBarTitleListHeader>
          </div>
          <div style={{ width: '75%' }}>
            <ColRightSide>
              <Blog1Svg style={{ width: '100%', borderRadius: '35px' }}/>
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
              <CardSubTitle>Stai per intraprendere un viaggio in auto con il tuo pelosetto? Se non puoi farlo viaggiare nel vano bagagliaio, allora è bene assicurarti di utilizzare una cintura di sicurezza per cani in modo da ancorarlo ai sedili posteriori.</CardSubTitle>
            </ColRightSide>
          </div>
        </StartComponents>

      </StyledContentSection>
    </div>
  );
};

export default HeaderPetId;
