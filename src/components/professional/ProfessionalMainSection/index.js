import React from 'react';

import RightImage from '@assets/images/Professional/ProfessionalRightImage.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import { Circular, ListContent, SmallGraceStyle, SubTitle, Title } from './styled';

const ProfessionalMainSection = () => {
  return (
    <div style={{
      padding: '236px 0 0 0',
      display: 'flex',
      width: '80%',
      margin: '0 auto',
      gap: '25px',
      position: 'relative',
    }}>
      <div style={{ width: '50%' }}>
        <div style={{ width: '90%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Title>
            Sei un professionista?
            </Title>
            <Title>
            Inizia a raggiungere nuovi clienti!
            </Title>
          </div>
          <SubTitle>
            Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit a purus
          </SubTitle>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', gap: '12px' }}>
            <ListContent>
              <Circular /> 150 strutture su tutta Roma
            </ListContent>
            <ListContent>
              <Circular /> Gestione dei clienti semplificata
            </ListContent>
            <ListContent>
              <Circular /> Una maggiore visibilità
            </ListContent>
          </div>
        </div>
      </div>
      <div style={{ width: '50%' }}>
        <div style={{
          width: '100%',
          height: '488px',
          background: '#44D3A8',
          border: '5px solid #007E60',
          borderRadius: '65px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
          <RightImage />
        </div>
      </div>
      <SmallGrace style={SmallGraceStyle} />
    </div>
  );
};

export default ProfessionalMainSection;