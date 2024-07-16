import React from 'react';

import KeyCardIcon from '@assets/images/FAQ/key.svg';

import { CardMainTitle } from './style';
import Question2Accordian4 from './Question2/Question2Accordian4';
import Question2Accordian3 from './Question2/Question2Accordian3';
import Question2Accordian2 from './Question2/Question2Accordian2';
import Question2Accordian1 from './Question2/Question2Accordian1';

const Question2 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        onClick={() => setActiveMainCard(activeMainCard === 'Question2' ? '' : 'Question2')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #AC4800',
          background: '#FF8310',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        <CardMainTitle>
          Il mio account
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #AC4800',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#AC4800',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question2' ? '-' : '+'}
          </p>
        </div>
        <KeyCardIcon style={{ position: 'absolute', bottom: 0, zIndex: 1, right: 0 }} />
      </div>
      {activeMainCard === 'Question2' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question2Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question2Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question2Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question2Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Question2;