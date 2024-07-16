import React from 'react';

import DoorCardIcon from '@assets/images/FAQ/door.svg';

import { CardMainTitle } from './style';
import Question1Accordian1 from './Question1/Question1Accordian1';
import Question1Accordian2 from './Question1/Question1Accordian2';
import Question1Accordian3 from './Question1/Question1Accordian3';
import Question1Accordian4 from './Question1/Question1Accordian4';

const Question1 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        onClick={() => setActiveMainCard(activeMainCard === 'Question1' ? '' : 'Question1')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #A00483',
          background: '#C54EAE',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <CardMainTitle>
          Accesso e Registrazione
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #A00483',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#A00483',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question1' ? '-' : '+'}
          </p>
        </div>
        <DoorCardIcon style={{ position: 'absolute', bottom: 0, zIndex: 1, right: '90px' }} />
      </div>
      {activeMainCard === 'Question1' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question1Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question1Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question1Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question1Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Question1;