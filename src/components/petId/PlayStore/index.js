import React from 'react';
import { useIntl } from 'react-intl';

import { StoreBadges } from '@components/molecules';

import SmallGrace from '@assets/images/common/smallGrace.svg';
import ThreeTree from '@assets/images/common/LargeThreeTree.svg';
import LeftRoad from '@assets/images/PetId/LeftLongRoad.svg';
import RightImage from '@assets/images/PetId/PetIdRight.svg';

import { LeftTruck, RightTruck, SmallGraceStyle, Thirdtitle, Title, TreeStyle } from './styled';

const PlayStore = () => {
  const { locale } = useIntl();

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
  );
};

export default PlayStore;
