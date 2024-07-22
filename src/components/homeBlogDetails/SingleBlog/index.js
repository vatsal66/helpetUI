import React from 'react';

import Categories from '@components/homeBlog/Categories';

import FaceBookIcon from '@assets/images/BlogDetails/facebookIcon.svg';
import LinkdinIcon from '@assets/images/BlogDetails/linkdinIcon.svg';
import BlogDetails1 from '@assets/images/BlogDetails/BlogDetails1.png';
import BlogDetails2 from '@assets/images/BlogDetails/BlogDetails2.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';
import ThreeTree from '@assets/images/common/LargeThreeTree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';
import SmallGrace1 from '@assets/images/common/smallGrace.svg';
import SmallGraceTop from '@assets/images/common/smallGrace.svg';

import {
  CardHeader, CardHeaderName, CardSubName,
  StartComponents, CardSubTitle, StyledContentSection,
  TitleRight, LeftTItle,
  ThreeTreeStyle, SmallGraceStyleBottom,
  SmallGraceRightStyle, SmallGraceLeftTopStyle,
} from './styled';

const SingleBlog = ({ activeSideCategory, setActiveSideCategory  }) => {

  return (
    <div style={{
      padding: '240px 0 150px 0',
    }}>
      <StyledContentSection>
        <StartComponents>
          <div style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Categories
              activeSideCategory={activeSideCategory}
              setActiveSideCategory={setActiveSideCategory}
            />
            <LeftTItle>
              Condividi
            </LeftTItle>
            <FaceBookIcon />
            <div style={{ position: 'relative' }}>
              <LinkdinIcon />
              <SmallGraceTop style={SmallGraceLeftTopStyle} />
            </div>
          </div>
          <div style={{ width: '75%', display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <TitleRight>
              Cintura di Sicurezza per Cani: Che cos’è e Cosa dice la legge?
            </TitleRight>
            <img src={BlogDetails1} style={{ borderRadius: '35px', width: '100%' }} />
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
            <CardSubTitle style={{ marginTop: '12px' }}>
              <div>
                Stai per intraprendere un viaggio in auto con il tuo pelosetto? Se non puoi farlo viaggiare nel vano bagagliaio, allora è bene assicurarti di utilizzare una cintura di sicurezza per cani in modo da ancorarlo ai sedili posteriori.
              </div>
              <div>
                Così facendo, rispetterai la normativa vigente garantendo, allo stesso tempo, un viaggio in auto in sicurezza per te e per il tuo caro amico a quattro zampe.
              </div>
              <div>
                Vediamo, quindi, che cos’è la cintura di sicurezza per cani, che cosa dice la normativa a riguardo e qualche consiglio per viaggiare assieme al tuo animale domestico.
              </div>
            </CardSubTitle>
            <TitleRight>
              Che Cos’è la Cintura di Sicurezza per Cani?
            </TitleRight>
            <CardSubTitle>
              <div>
                Le cinture di sicurezza per cani sono delle attrezzature progettate per proteggere i nostri amici a quattro zampe durante i viaggi in auto. Esse vengono collegate alle cinture di sicurezza dell’automobile e sono disponibili in varie dimensioni per adattarsi a cani di diverse taglie.
              </div>
              <div>
                Queste cinture sono dotate di chiusure universali le quali consentono di installarle su qualsiasi tipologia di veicolo.
              </div>
              <div>
                Molti di questi dispositivi possono essere, inoltre, collegati direttamente al collare o alla pettorina del tuo cane, semplificando il sistema di aggancio e non richiedendo l’acquisto di componenti aggiuntive.
              </div>
              <SmallGrace1  style={SmallGraceRightStyle}/>
            </CardSubTitle>
            <TitleRight style={{ margin: '10px 0' }}>
              Dove Acquistare le Cinture di Sicurezza per Cani?
            </TitleRight>
            <div style={{ position: 'relative' }}>
              <img src={BlogDetails2} style={{ borderRadius: '35px', width: '100%' }} />
              <ThreeTree style={ThreeTreeStyle}/>
            </div>
            <CardSubTitle>
              <div>
                Le cinture di sicurezza per cani sono delle attrezzature progettate per proteggere i nostri amici a quattro zampe durante i viaggi in auto. Esse vengono collegate alle cinture di sicurezza dell’automobile e sono disponibili in varie dimensioni per adattarsi a cani di diverse taglie.
              </div>
              <div>
                Queste cinture sono dotate di chiusure universali le quali consentono di installarle su qualsiasi tipologia di veicolo.
              </div>
              <div>
                Molti di questi dispositivi possono essere, inoltre, collegati direttamente al collare o alla pettorina del tuo cane, semplificando il sistema di aggancio e non richiedendo l’acquisto di componenti aggiuntive.
              </div>
              <SmallGrace  style={SmallGraceStyleBottom}/>
            </CardSubTitle>
          </div>
        </StartComponents>
      </StyledContentSection>
    </div>
  );
};

export default SingleBlog;
