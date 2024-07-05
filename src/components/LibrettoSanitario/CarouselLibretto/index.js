import React, { createElement } from 'react'
import ArrowLeftSvg from '@assets/images/PetId/arrowLeft.svg'
import ArrowRighttSvg from '@assets/images/PetId/arrowRight.svg'
import CarouselImage1 from '@assets/images/Librettosanitario/carosal1.png'
import CarouselIcon1 from '@assets/images/Librettosanitario/CarouselIcon1.png'
import CarouselIcon2 from '@assets/images/Librettosanitario/CarouselIcon2.png'
import CarouselIcon3 from '@assets/images/Librettosanitario/CarouselIcon3.png'
import CarouselIcon4 from '@assets/images/Librettosanitario/CarouselIcon4.png'
import CarouselIcon5 from '@assets/images/Librettosanitario/CarouselIcon5.png'
import CarouselIcon6 from '@assets/images/Librettosanitario/CarouselIcon6.png'

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
  UpperSide
} from './styled'
import Slider from "react-slick";
import SmallGrace from '@assets/images/common/smallGrace.svg';

function Arrow(props) {
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
  title: 'Medicinali',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon1,
}, {
  title: 'Vaccini',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon2,
}, {
  title: 'Ricette',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon3,
}, {
  title: 'Esami',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon4,
}, {
  title: 'Interventi chirurgici',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon5,
}, {
  title: 'Visita medica',
  subTitle: 'Nella sezione dedicata al Pet ID in basso a sinistra nella barra di navigazione avrai accesso a tutta la documentazione relativa al tuo amico a quattro zampe.',
  Image: CarouselImage1,
  HeaderIcon: CarouselIcon6,
}]

const CarouselLibretto = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 5000,
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '35px'
    }}>
      <div style={{
        display: 'flex',
        width: '100%',
        gap: '10px',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '85px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: '10px',
          position: 'relative',
        }}>
          <SmallGrace style={SmallGraceStyle} />
          <Title>Cosa include il Libretto Sanitario</Title>
          <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
          a purus </Subtitle>
        </div>
      </div>

        <div
          className="slider-container"
          style={{
            width: '80%',
            margin: '0 auto'
          }}>
          <Slider
            {...settings}
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
          >
            {dataJson?.map((item, index) => {
              return (
                <CarouselCard>
                  <CarouselCardCenter>
                  <InsideRight>
                      <img src={item?.Image} style={{
                        height: 'auto',
                        width: '100%'
                      }} />
                    </InsideRight>

                    <InsideLeft>
                      <InsideLeftTop>
                        <CenterSide>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
                          <img src={item.HeaderIcon} />
                            <HeaderText>
                              {item?.title}
                            </HeaderText>
                          </div>
                          <HeaderSubText>
                            {item?.subTitle}
                          </HeaderSubText>
                        </CenterSide>
                      </InsideLeftTop>
                    </InsideLeft>
                  </CarouselCardCenter>
                </CarouselCard>
              )
            })}

          </Slider>
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

        `}
      </style>
    </div>

  )
}

export default CarouselLibretto