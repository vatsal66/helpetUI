import React from 'react';

import { StyledBigCloud, StyledContentSection, StyledHeader, StyledSmallCloud, Subtitle, Title, TitleContainer } from './styled';

const HeaderPetId = () => {
  return (
    <StyledHeader>
      <StyledContentSection>
        <TitleContainer>
          <Title>Near me</Title>
          <Subtitle>I documento del tuo pet</Subtitle>
          <Subtitle>sempre con te</Subtitle>
        </TitleContainer>
      </StyledContentSection>

      <StyledSmallCloud top="110px" duration={80} left />
      <StyledSmallCloud top="75px" duration={90} right />
      <StyledBigCloud top="190px" duration={100} left />
      <StyledBigCloud top="150px" duration={70} right />
    </StyledHeader>
  );
};

export default HeaderPetId;
