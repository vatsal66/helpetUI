import React from 'react'
import { LeftTruck, RightTruck, SmallGraceStyle, Thirdtitle, Title, TreeStyle } from './styled'
import { StoreBadges } from '@components/molecules'
import { useIntl } from 'react-intl';
import RightPath from '@assets/images/Librettosanitario/RightPath.svg';
import Truck from '@assets/images/Librettosanitario/PlayStoreTruck.svg';
import Tree from '@assets/images/common/Tree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import ThreeTree from '@assets/images/common/LargeThreeTree.svg'
import LeftRoad from '@assets/images/PetId/LeftLongRoad.svg'
import RightImage from '@assets/images/PetId/PetIdRight.svg'

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
        <Title>del servizio di Libretto sanitario scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>

      <ThreeTree style={TreeStyle} />
      <SmallGrace style={SmallGraceStyle} />
      <LeftRoad style={LeftTruck} />
      <RightImage style={RightTruck} />
    </div>
  )
}

export default PlayStore
