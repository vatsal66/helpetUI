import React from 'react';

import MyInsurenceCardIcon from '@assets/images/FAQ/myinsurence.svg';

import { CardMainTitle } from './style';
import Question4Accordian1 from './Question4/Question4Accordian1';
import Question4Accordian2 from './Question4/Question4Accordian2';
import Question4Accordian3 from './Question4/Question4Accordian3';
import Question4Accordian4 from './Question4/Question4Accordian4';

const Question4 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        onClick={() => setActiveMainCard(activeMainCard === 'Question4' ? '' : 'Question4')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #007E60',
          background: '#44D3A8',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <CardMainTitle>
          My Insurance
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #007E60',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#007E60',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question4' ? '-' : '+'}
          </p>
        </div>
        <MyInsurenceCardIcon style={{ position: 'absolute', bottom: 0, zIndex: 1, right: '75px' }} />
      </div>
      {activeMainCard === 'Question4' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question4Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question4Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question4Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question4Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Question4;