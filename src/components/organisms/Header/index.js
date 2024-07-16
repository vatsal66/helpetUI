import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

import { StoreBadges } from '@components/molecules';

import {
  StyledHeader,
  StyledContentSection,
  TitleContainer,
  Title,
  Subtitle,
  ImagesContainer,
  StyledSmallCloud,
  StyledBigCloud,
  StyledBottomTrain,
  StyledBottomTrainHome,
  CallToAction,
} from './styled';

const Header = () => {
  const { messages, locale } = useIntl();

  return (
    <StyledHeader>
      <StyledContentSection>
        <TitleContainer>
          <Title>{messages['headerSection.title']}</Title>
          <Subtitle>{messages['headerSection.subtitle']}</Subtitle>
          <Subtitle>{messages['headerSection.subtitleTwo']}</Subtitle>
          <CallToAction>{messages['headerSection.callToAction']}</CallToAction>
          {StoreBadges[locale]()}
        </TitleContainer>
      </StyledContentSection>
      <ImagesContainer>
        {/* <StyledHeaderGrassLeft width={262} />
        <StyledHeaderLightGrassLeft width={221} />
        <StyledPetHouse width={207} /> */}
        {/* <PetHouseBg /> */}
        {/* <StyledHeaderGrassRight width={245} /> */}
        {/* <StyledHeaderLightGrassRight width={299} /> */}
        {/* <StyledCat width={109} /> */}
      </ImagesContainer>
      <StyledSmallCloud top="110px" duration={80} left />
      <StyledSmallCloud top="75px" duration={90} right />
      <StyledBigCloud top="190px" duration={100} left />
      <StyledBigCloud top="150px" duration={70} right />
      <StyledBottomTrain bottom="0px"/>
      <StyledBottomTrainHome bottom="0px"/>
    </StyledHeader>
  );
};

Header.propTypes = {
  onChangeLanguage: PropTypes.func.isRequired,
};

export default Header;
