import React, { useRef } from 'react';
import Slider from 'react-slick';
import { useIntl } from 'react-intl';

import { BenefitsPin } from '@components/atoms';

import CalendarIcon from '@assets/icons/benefits-calendar-pin.svg';
import ClockIcon from '@assets/icons/benefits-clock-pin.svg';
import PhoneIcon from '@assets/icons/benefits-phone-pin.svg';
import DocIcon from '@assets/icons/benefits-doc-pin.svg';
import Arrow from '@assets/images/arrow.svg';

import {
  SliderWrapper,
  ItemWrapper,
  NavContainer,
  NavButton,
  LeftArrow,
} from './styled';

const BenefitsCarousel = () => {
  const { messages } = useIntl();
  const sliderRef = useRef();

  const sliderSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderNext = () => {
    sliderRef.current.slickNext();
  };

  const sliderPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <SliderWrapper>
      <Slider ref={sliderRef} {...sliderSettings}>
        <ItemWrapper>
          <BenefitsPin
            SVG={DocIcon}
            title={messages['benefits.pins.document.title']}
            description={messages['benefits.pins.document.description']}
          />
        </ItemWrapper>
        <ItemWrapper>
          <BenefitsPin
            SVG={CalendarIcon}
            title={messages['benefits.pins.calendar.title']}
            description={messages['benefits.pins.calendar.description']}
          />
        </ItemWrapper>
        <ItemWrapper>
          <BenefitsPin
            SVG={ClockIcon}
            title={messages['benefits.pins.clock.title']}
            description={messages['benefits.pins.clock.description']}
          />
        </ItemWrapper>
        <ItemWrapper>
          <BenefitsPin
            SVG={PhoneIcon}
            title={messages['benefits.pins.phone.title']}
            description={messages['benefits.pins.phone.description']}
          />
        </ItemWrapper>
      </Slider>
      <NavContainer>
        <NavButton onClick={() => sliderPrev()}>
          <LeftArrow width={45} />
        </NavButton>
        <NavButton onClick={() => sliderNext()}>
          <Arrow width={45} />
        </NavButton>
      </NavContainer>
    </SliderWrapper>
  );
};

export default BenefitsCarousel;
