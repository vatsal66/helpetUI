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
import Transport from '@assets/images/transport.svg';
import Emergency from '@assets/images/emergency.svg';
import Grooming from '@assets/images/grooming.svg';
import Grass from '@assets/images/grass.svg';
import Next from '@assets/images/next.svg';
import Prev from '@assets/images/prev.svg';
import CardDetail from '@assets/icons/card-detail.svg';

import {
  Container,
  NavContainer,
  NavButton,
  CarouselFooter,
  Description,
  GrassWrapper,
  InnerWrapper,
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
    transport: () => <Transport />,
    emergency: () => <Emergency />,
    grooming: () => <Grooming />,
  };

  return (
    <Container className="services">
      <InnerWrapper>
        {isRendered && (
          <Slider ref={sliderRef} {...sliderSettings}>
            {Object.entries(items).map((item) => (
              <CarouselItem key={item[0]} tag={item[0]}>
                {item[1]()}
              </CarouselItem>
            ))}
          </Slider>
        )}
        <NavContainer>
          <NavButton onClick={() => sliderPrev()}>
            <Prev width={45} />
          </NavButton>
          <NavButton onClick={() => sliderNext()}>
            <Next width={45} />
          </NavButton>
        </NavContainer>
      </InnerWrapper>
      <CarouselFooter>
        <Description>
          <TypeText>{messages['carousel.title']}</TypeText>
          <div>
            <CardDetail />
          </div>
          {messages['carousel.description']}
        </Description>
        <GrassWrapper>
          <Grass />
        </GrassWrapper>
      </CarouselFooter>
    </Container>
  );
};

export default Carousel;
