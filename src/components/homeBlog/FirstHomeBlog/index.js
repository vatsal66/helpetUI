import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import Blog1Svg from '@assets/images/HomeBlog/Blog1.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import {
  CardHeader, CardHeaderName,
  CardMainTitle, CardSubName, CardSubTitle,
  ColRightSide,
  DetailButton,
  StartComponents, StyledContentSection,
} from './styled';

import Categories from '../Categories';

const FirstHomeBlog = ({ activeSideCategory, setActiveSideCategory }) => {
  const location = useLocation();
  const data = location.state?.data;
  return (
    <div style={{
      padding: '240px 0 0 0',
    }}>
      {data && (
        <div style={{
          width: '80%',
          margin: '0 auto',
        }}>
          <div style={{ width: '25%' }} />
          <div style={{
            width: '75%',
            fontSize: '32px',
            fontWeight: '800',
            color: '#343434',
            margin: '0 0 70px auto',
          }}>
            22 Risultati trovati per “{data}”
          </div>
        </div>
      )}
      <StyledContentSection>
        <StartComponents>
          <div style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Categories
              activeSideCategory={activeSideCategory}
              setActiveSideCategory={setActiveSideCategory}
            />
          </div>
          <div style={{ width: '75%' }}>
            <Link to="/homeBlogDetails" style={{ color: '#151515', textDecoration: 'none' }}>
              <ColRightSide>
                <div style={{ position: 'relative' }}>
                  <img src={Blog1Svg} style={{ width: '100%', borderRadius: '35px' }}/>
                  <DetailButton>Viaggi</DetailButton>
                </div>
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
            </Link>
          </div>
        </StartComponents>

      </StyledContentSection>
    </div>
  );
};

export default FirstHomeBlog;
