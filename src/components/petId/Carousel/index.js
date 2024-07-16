import React from 'react';
import Slider from "react-slick";

import ArrowLeftSvg from '@assets/images/PetId/arrowLeft.svg';
import ArrowRighttSvg from '@assets/images/PetId/arrowRight.svg';
import CarouselImage1 from '@assets/images/PetId/carosal1.png';
import CarouselImage2 from '@assets/images/PetId/carosal2.png';
import CarouselImage3 from '@assets/images/PetId/carosal3.png';
import LeftRoad from '@assets/images/PetId/LeftRoadCarousel.png';
import RightRoad from '@assets/images/PetId/RightRoadCarousel.png';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import {
  CarouselCard,
  CarouselCardCenter,
  CenterSide,
  HeaderSubText,
  HeaderText,
  InsideLeft,
  InsideLeftTop,
  InsideRight,
  SmallGraceStyle,
  Subtitle,
  Title,
  UpperSide,
} from './styled';

function Arrow (props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? <ArrowRighttSvg /> : <ArrowLeftSvg />;

  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}

const dataJson = [{
  title: 'Apri la sezione Pet ID in Helpet App',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
}, {
  title: 'Aggiungi il codice del Microchip',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage2,
}, {
  title: 'Aggiungi il passaporto del tuo pet',
  subTitle: 'Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet',
  Image: CarouselImage3,
}];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '35px',
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: '10px',
          position: 'relative',
        }}>
          <SmallGrace style={SmallGraceStyle} />
          <Title>Cos’è il Pet ID</Title>
          <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
            a purus </Subtitle>
        </div>
      </div>
      <div style={{
        display: 'flex',
      }}>
        <img
          src={LeftRoad}
          style={{
            width: '10%',
            height: 'fit-content',
            margin: 0,
            position: 'relative',
            left: '5px',
            top: '252px',
          }} />
        <div
          className="slider-container"
          style={{
            width: '80%',
            zIndex: 1,
          }}>
          <Slider
            {...settings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
            {dataJson?.map((item, index) => {
              return (
                <CarouselCard key={index}>
                  <CarouselCardCenter>
                    <InsideLeft>
                      <InsideLeftTop>
                        <UpperSide>
                          {index + 1}
                        </UpperSide>
                        <CenterSide>
                          <HeaderText>
                            {item?.title}
                          </HeaderText>
                          <HeaderSubText>
                            {item?.subTitle}
                          </HeaderSubText>
                        </CenterSide>
                      </InsideLeftTop>
                    </InsideLeft>
                    <InsideRight>
                      <img src={item?.Image} style={{
                        height: 'auto',
                        width: '100%',
                      }} />
                    </InsideRight>
                  </CarouselCardCenter>
                </CarouselCard>
              );
            })}

          </Slider>
        </div>
        <img src={RightRoad} style={{
          width: '10%',
          height: 'fit-content',
          margin: 0,
          position: 'relative',
          right: '5px',
          top: '252px',
        }} />
      </div>
      <style>
        {`
          .arrow {
            position: absolute;
            color: #000000;
            font-size: 2.5em;
            font-weight: bold;
            cursor: pointer;
          }

          .nextArrow {
            top: 252px;
            right: 50px;
            z-index: 1;
          }

          .prevArrow {
            top: 252px;
            left: 50px;
            z-index: 1;
          }

          .slick-dots {
            justify-content: unset !important;
            margin-left: calc(7% + 50px);
            position: relative;
            bottom: 85px;
          }

          .slick-dots li.slick-active button {
            background-color: #CC7E09!important;
            width: 25px;
            border-radius: 30px;
          }

          .slick-dots li {
            margin: 0 4px;
          }

          .slick-dots li button {
            width: 12px;
            height: 12px;
          }
        `}
      </style>
    </div>

  );
};

export default Carousel;