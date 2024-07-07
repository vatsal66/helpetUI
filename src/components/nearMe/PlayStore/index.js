import React from 'react'
import { leftImageStyle, RightRoadStyle, SmallGraceStyle, Thirdtitle, Title } from './styled'
import { StoreBadges } from '@components/molecules'
import { useIntl } from 'react-intl';

import LeftImage from '@assets/images/NearMe/LeftImagePlayStore.svg'
import SmallGrace from '@assets/images/common/smallGrace.svg';

const PlayStore = () => {
  const { messages, locale } = useIntl();

  return (
    <div style={{
      width: '80%',
      margin: '0 auto',
      position: 'relative',
    }}>
      <Thirdtitle>
        <Title>Per usufruire anche tu</Title>
        <Title>del servizio Near me scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>
      <LeftImage style={leftImageStyle} />
      <SmallGrace style={SmallGraceStyle} />
    </div>
  )
}

export default PlayStore
