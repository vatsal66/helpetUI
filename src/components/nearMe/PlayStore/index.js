import React from 'react';
import { useIntl } from 'react-intl';

import { StoreBadges } from '@components/molecules';

import LeftImage from '@assets/images/NearMe/LeftImagePlayStore.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import { leftImageStyle, SmallGraceStyle, Thirdtitle, Title } from './styled';

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
        <Title>del servizio Near me scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>
      <LeftImage style={leftImageStyle} />
      <SmallGrace style={SmallGraceStyle} />
    </div>
  );
};

export default PlayStore;
