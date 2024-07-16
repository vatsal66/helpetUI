import React from 'react';
import { useIntl } from 'react-intl';

import { StoreBadges } from '@components/molecules';

import { Thirdtitle, Title } from './styled';

const Download = () => {
  const { locale } = useIntl();

  return (
    <div style={{
      width: '80%',
      margin: '0 auto',
    }}>
      <Thirdtitle>
        <Title>Per usufruire anche tu</Title>
        <Title>del servizio di Libretto sanitario scarica l’app </Title>
        {StoreBadges[locale]()}
      </Thirdtitle>
    </div>

  );
};

export default Download;
