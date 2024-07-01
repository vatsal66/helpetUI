import React from 'react'
import { StyledHeader, Subtitle, Thirdtitle, Title, TitleContainer } from './styled'
import { StoreBadges } from '@components/molecules'
import { useIntl } from 'react-intl';
import { CallToAction } from '@components/organisms/Header/styled';

const CartPetId = () => {
  const { messages, locale } = useIntl();

  return (
    <div style={{
      width: '80%',
      margin: '0 auto'
    }}>
      <TitleContainer>
        <Title>Cosa include il Libretto Sanitario</Title>
        <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
          a purus </Subtitle>
          {/* Slider not working */}
        <StyledHeader /> 
        <Title>Vantaggi</Title>
        <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
          a purus  </Subtitle>
      </TitleContainer>
      <Thirdtitle>
        <Title>Per usufruire anche tu</Title>
        <Title>del servizio di Libretto sanitario scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>
    </div>
  )
}

export default CartPetId
