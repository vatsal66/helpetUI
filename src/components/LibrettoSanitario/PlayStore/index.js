import React from 'react';
import { useIntl } from 'react-intl';

import { StoreBadges } from '@components/molecules';

import RightPath from '@assets/images/Librettosanitario/RightPath.svg';
import Truck from '@assets/images/Librettosanitario/PlayStoreTruck.svg';
import Tree from '@assets/images/common/Tree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

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
      <Tree style={TreeStyle} />
      <SmallGrace style={SmallGraceStyle} />
      <Truck style={LeftTruck} />
      <RightPath style={RightTruck} />
    </div>
  );
};

export default PlayStore;
