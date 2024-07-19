import React from 'react';
import Slider from 'react-slick';

import ArrowLeftSvg from '@assets/images/BlogDetails/BlogDetailsLeft.svg';
import ArrowRighttSvg from '@assets/images/BlogDetails/BlogDetailsRight.svg';
import BlogDetailsCarosal1 from '@assets/images/BlogDetails/BlogDetailsCarosal1.png';
import BlogDetailsCarosal2 from '@assets/images/BlogDetails/BlogDetailsCarosal2.png';
import BlogDetailsCarosal3 from '@assets/images/BlogDetails/BlogDetailsCarosal3.png';
import Icon1Svg from '@assets/images/HomeBlog/Icon1.svg';
import Icon2Svg from '@assets/images/HomeBlog/Icon2.svg';
import Icon3Svg from '@assets/images/HomeBlog/Icon3.svg';

import {
  CardHeader,
  CardHeaderName,
  CardSubName,
  CardSubTitle,
  CarouselCard, CarouselContainer, StyledContentSection, svgStyle, TitleCarousel,
  TitleRight } from './styled';

const BlogDetailscarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // speed: 2000,
    // autoplaySpeed: 5000,
  };

  function Arrow (props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? <ArrowRighttSvg /> : <ArrowLeftSvg />  ;

    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  const dataJson = [{
    title: 'Cane in Aereo: Quali sono le Regole 2023 e i Consigli',
    subTitle: 'Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?',
    Image: BlogDetailsCarosal1,
    date: 'Luglio 18, 2023',
    profile: 'helpetapp',
    comment: '12',
  }, {
    title: 'Cane in Aereo: Quali sono le Regole 2023 e i Consigli',
    subTitle: 'Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?',
    Image: BlogDetailsCarosal2,
    date: 'Luglio 18, 2023',
    profile: 'helpetapp',
    comment: '12',
  }, {
    title: 'Cane in Aereo: Quali sono le Regole 2023 e i Consigli',
    subTitle: 'Vuoi viaggiare in aereo con il tuo fedele amico a quattro zampe? Lo sapevi che alcune compagnie aeree accettano a bordo i cani?',
    Image: BlogDetailsCarosal3,
    date: 'Luglio 18, 2023',
    profile: 'helpetapp',
    comment: '12',
  }];

  return (
    <StyledContentSection>
      <TitleCarousel>
        Ti potrebbe anche interessare
      </TitleCarousel>
      <CarouselContainer>
        <div
          className="slider-container"
          style={{
            width: '100%',
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
                  <img src={item?.Image} style={{ width: '100%', borderRadius: '35px' }} />
                  <CardHeader>
                    <CardHeaderName>
                      <Icon1Svg style={svgStyle} />
                      <CardSubName>{item?.date}</CardSubName>
                    </CardHeaderName>
                    <CardHeaderName>
                      <Icon2Svg style={svgStyle} />
                      <CardSubName>{item?.profile}</CardSubName>
                    </CardHeaderName>
                    <CardHeaderName>
                      <Icon3Svg style={svgStyle} />
                      <CardSubName>{item?.comment}</CardSubName>
                    </CardHeaderName>
                  </CardHeader>
                  <TitleRight>{item?.title}</TitleRight>
                  <CardSubTitle>{item?.subTitle}</CardSubTitle>
                </CarouselCard>
              );
            })}
          </Slider>
        </div>
      </CarouselContainer>
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
            top: 50%;
            right: -45px;
            z-index: 1;
          }

          .prevArrow {
            top: 50%;
            left: -60px;
            z-index: 1;
          }

          .slick-initialized .slick-slide {
            display: block;
            gap: 36px;
          }
          .slick-slide.slick-current svg {
            width: unset;
            }
          .slick-slide svg {
              width: unset;
          }
          .slick-track {
            display: flex;
            gap: 36px;
          }
        `}
      </style>
    </StyledContentSection>
  );
};

export default BlogDetailscarousel;