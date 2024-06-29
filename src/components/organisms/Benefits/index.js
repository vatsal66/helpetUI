import React from 'react';
import { useIntl } from 'react-intl';

import { BenefitsPin } from '@components/atoms';
import { BenefitsCarousel, StoreBadges } from '@components/molecules';

import CalendarIcon from '@assets/icons/benefits-calendar-pin.svg';
import ClockIcon from '@assets/icons/benefits-clock-pin.svg';
import PhoneIcon from '@assets/icons/benefits-phone-pin.svg';
import DocIcon from '@assets/icons/benefits-doc-pin.svg';

import {
  StyledContentSection,
  TitleContainer,
  Title,
  ColoredTitle,
  ImageContainer,
  ImageWrapper,
  Column,
  MockPhone,
  PhoneBackground,
  CallToAction,
} from './styled';

const Benefits = () => {
  const { messages, locale } = useIntl();

  const titleMaxWidthByLocale = {
    'pt-BR': 480,
    it: 520,
  };

  return (
    <StyledContentSection>
      <TitleContainer maxWidth={titleMaxWidthByLocale[locale]}>
        <Title>
          <ColoredTitle>{messages['benefits.title']}</ColoredTitle>{' '}
          {messages['benefits.subtitle']}
        </Title>
      </TitleContainer>
      <ImageContainer>
        <Column>
          <BenefitsPin
            SVG={DocIcon}
            title={messages['benefits.pins.document.title']}
            description={messages['benefits.pins.document.description']}
          />
          <BenefitsPin
            SVG={CalendarIcon}
            title={messages['benefits.pins.calendar.title']}
            description={messages['benefits.pins.calendar.description']}
          />
        </Column>
        <ImageWrapper>
          <PhoneBackground />
          <MockPhone />
        </ImageWrapper>
        <Column>
          <BenefitsPin
            SVG={ClockIcon}
            title={messages['benefits.pins.clock.title']}
            description={messages['benefits.pins.clock.description']}
          />
          <BenefitsPin
            SVG={PhoneIcon}
            title={messages['benefits.pins.phone.title']}
            description={messages['benefits.pins.phone.description']}
          />
        </Column>
      </ImageContainer>
      <CallToAction>{messages['benefits.callToAction']}</CallToAction>
      {StoreBadges[locale]()}
      <BenefitsCarousel />
    </StyledContentSection>
  );
};

export default Benefits;
