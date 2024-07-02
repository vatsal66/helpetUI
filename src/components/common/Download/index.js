import React from 'react'
import { Thirdtitle, Title } from './styled'
import { StoreBadges } from '@components/molecules'
import { useIntl } from 'react-intl';

const Download = () => {
  const { messages, locale } = useIntl();

  return (
    <div style={{
      width: '80%',
      margin: '0 auto'
    }}>
      <Thirdtitle>
        <Title>Per usufruire anche tu</Title>
        <Title>del servizio di Libretto sanitario scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>
    </div>

  )
}

export default Download
