/* eslint-disable no-unused-vars */
import React from 'react';

import business24 from '@assets/images/HomePage/supportImg/business24.png';
import support2 from '@assets/images/HomePage/supportImg/support2.png';
import support3 from '@assets/images/HomePage/supportImg/support3.png';
import support4 from '@assets/images/HomePage/supportImg/support4.png';
import support5 from '@assets/images/HomePage/supportImg/support5.png';
import support6 from '@assets/images/HomePage/supportImg/support6.png';
import support7 from '@assets/images/HomePage/supportImg/support7.png';
import support8 from '@assets/images/HomePage/supportImg/support8.png';
//background
import topLeftBG from '@assets/images/HomePage/supportImg/topLeftBG.png';
import topRightbg from '@assets/images/HomePage/supportImg/topRightbg.png';
import bottomBg from '@assets/images/HomePage/supportImg/bottomBg.png';

import {
  StyledContentMainSection,
  TextSection,
  TextTitle,
  TextDescription,
  ImageGrid,
  ImageRow,
  VerticalLine,
  HorizontalLine,
  TopLeftBG,
  TopRightBG,
  BottomLeftBG,
  BottomRightBG,
} from './styled';

const AboutUs = () => {
  return (
    <StyledContentMainSection>
      <TextSection>
        <TextTitle>Parlano di noi</TextTitle>
        <TextDescription>Helpet App è apparsa su diverse testate nazionali
        ed internazionali come:</TextDescription>
      </TextSection>

      <ImageGrid>
        <ImageRow>
          <img src={business24} alt="Business24" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support2} alt="Logo2" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support3} alt="Corriere della Sera" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support4} alt="Il Messaggero" style={{  width: '100px', height: 'auto', display: 'block' }}/>
        </ImageRow>
        <div style={{ display: 'flex', margin: '20px 0' }}>
          <HorizontalLine />
          <HorizontalLine />
          <HorizontalLine />
          <HorizontalLine />
        </div>
        <ImageRow>
          <img src={support5} alt="Leggo" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support6} alt="Cision" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support7} alt="BMBW" style={{  width: '100px', height: 'auto', display: 'block' }}/>
          <VerticalLine />
          <img src={support8} alt="TK Business" style={{  width: '100px', height: 'auto', display: 'block' }}/>
        </ImageRow>
      </ImageGrid>

      <img style={{ position: 'absolute', top: '15%' }} src={topLeftBG}/>
      <img style={{ position: 'absolute', top: '7%', right: '10%', height: '125px' }} src={topRightbg}/>
      <img style={{ position: 'absolute', bottom: '10%', width: '30px' }} src={bottomBg}/>
      <img style={{ position: 'absolute', bottom: '10%', width: '30px', right: '10%' }} src={bottomBg}/>

    </StyledContentMainSection>
  );
};

export default AboutUs;
