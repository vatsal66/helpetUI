import React from 'react';

import LocationCardIcon from '@assets/images/FAQ/location.svg';

import { CardMainTitle } from './style';
import Question5Accordian1 from './Question5/Question5Accordian1';
import Question5Accordian2 from './Question5/Question5Accordian2';
import Question5Accordian3 from './Question5/Question5Accordian3';
import Question5Accordian4 from './Question5/Question5Accordian4';

const Question5 = ({ activeMainCard, setActiveMainCard, handleChange, expanded }) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div
        onClick={() => setActiveMainCard(activeMainCard === 'Question5' ? '' : 'Question5')}
        style={{
          width: '100%',
          borderRadius: '35px',
          border: '5px solid #A70F5B',
          background: '#D92A82',
          height: '194px',
          display: 'flex',
          padding: '0 50px 0 40px',
          justifyContent: 'space-between',
          position: 'relative',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
        <CardMainTitle>
          Mappa e Servizi
        </CardMainTitle>

        <div style={{
          width: '41px',
          height: '41px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '4px solid #A70F5B',
          borderRadius: '50%',
          background: '#ffffff',
          zIndex: 2,
        }}>
          <p style={{
            color: '#A70F5B',
            fontWeight: 900,
            fontSize: '28px',
            lineHeight: '28px',
          }}>
            {activeMainCard === 'Question5' ? '-' : '+'}
          </p>
        </div>
        <LocationCardIcon style={{ position: 'absolute', bottom: 0, zIndex: 1, right: '100px' }} />
      </div>
      {activeMainCard === 'Question5' &&  (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <Question5Accordian1 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question5Accordian2 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question5Accordian3 handleChange={handleChange} expanded={expanded} />
          </div>
          <div>
            <Question5Accordian4 handleChange={handleChange} expanded={expanded} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Question5;