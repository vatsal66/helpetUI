import React from 'react';

import PetIdCardIcon from '@assets/images/FAQ/petId.svg';

import { CardMainTitle } from './style';
import Question3Accordian4 from './Question3/Question3Accordian4';
import Question3Accordian3 from './Question3/Question3Accordian3';
import Question3Accordian2 from './Question3/Question3Accordian2';
import Question3Accordian1 from './Question3/Question3Accordian1';

const Question3 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        onClick={() => setActiveMainCard(activeMainCard === 'Question3' ? '' : 'Question3')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #62007A',
          background: '#BF57F0',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <CardMainTitle>
          Pet ID
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #62007A',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#62007A',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question3' ? '-' : '+'}
          </p>
        </div>
        <PetIdCardIcon style={{ position: 'absolute', bottom: '-5px', zIndex: 1, right: '135px' }} />
      </div>
      {activeMainCard === 'Question3' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question3Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question3Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question3Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question3Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Question3;