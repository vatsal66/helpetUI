import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useIntl } from 'react-intl';

import { CarouselItem } from '@components/molecules';

import Adoption from '@assets/images/adoption.svg';
import Beach from '@assets/images/beach.svg';
import Education from '@assets/images/education.svg';
import Gastronomy from '@assets/images/gastronomy.svg';
import Health from '@assets/images/health.svg';
import PetShop from '@assets/images/petshop.svg';
import Veterinary from '@assets/images/veterinary.svg';
import Park from '@assets/images/park.svg';
import Taxi from '@assets/images/HomePage/taxi.svg';
import Emergency from '@assets/images/emergency.svg';
import Grooming from '@assets/images/grooming.svg';
import Next from '@assets/images/HomePage/Right.svg';
import Prev from '@assets/images/HomePage/Left.svg';

import {
  Container,
  NavContainer,
  NavButton,
  Description,
  InnerWrapper,
  SliderContainer,
  TypeText,
} from './styled';

const Carousel = () => {
  const { messages } = useIntl();
  const sliderRef = useRef();
  const sliderSettings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    className: 'center',
    centerMode: true,
    infinite: true,
    speed: 500,
    swipe: true,
    variableWidth: true,
  };
  const [isRendered, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const sliderNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  const items = {
    health: () => <Health />,
    adoption: () => <Adoption />,
    beach: () => <Beach />,
    education: () => <Education />,
    gastronomy: () => <Gastronomy />,
    petShop: () => <PetShop />,
    veterinary: () => <Veterinary />,
    park: () => <Park />,
    transport: () => <Taxi />,
    emergency: () => <Emergency />,
    grooming: () => <Grooming />,
  };

  return (
    <Container className="services">
      <Description>
        <TypeText>{messages['carousel.title']}</TypeText>
        {messages['carousel.description']}
      </Description>
      <InnerWrapper>
        <NavContainer>
          <NavButton onClick={() => sliderPrev()}>
            <Prev width={45} />
          </NavButton>
          <NavButton onClick={() => sliderNext()}>
            <Next width={45} />
          </NavButton>
        </NavContainer>
        <SliderContainer>
          {isRendered && (
            <Slider ref={sliderRef} {...sliderSettings}>
              {Object.entries(items).map((item) => (
                <CarouselItem key={item[0]} tag={item[0]}>
                  {item[1]()}
                </CarouselItem>
              ))}
            </Slider>
          )}
        </SliderContainer>
        <div style={{ height: '100px', backgroundColor: '#00B388', position: 'relative', bottom: '125px', zIndex: '-1' }}></div>
      </InnerWrapper>
    </Container>
  );
};

export default Carousel;
