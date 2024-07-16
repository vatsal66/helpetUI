import React from 'react';

import LibrettoSanitarioCardIcon from '@assets/images/FAQ/librettoSanitario.svg';

import { CardMainTitle } from './style';
import Question6Accordian4 from './Question6/Question6Accordian4';
import Question6Accordian3 from './Question6/Question6Accordian3';
import Question6Accordian2 from './Question6/Question6Accordian2';
import Question6Accordian1 from './Question6/Question6Accordian1';

const Question6 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div onClick={() => setActiveMainCard(activeMainCard === 'Question6' ? '' : 'Question6')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #CC7E09',
          background: '#FCB300',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <CardMainTitle>
          Libretto Sanitario
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #CC7E09',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#CC7E09',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question6' ? '-' : '+'}
          </p>
        </div>
        <LibrettoSanitarioCardIcon style={{ position: 'absolute', bottom: 0, zIndex: 1, right: '105px' }} />
      </div>
      {activeMainCard === 'Question6' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question6Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question6Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question6Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question6Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>

  );
};

export default Question6;