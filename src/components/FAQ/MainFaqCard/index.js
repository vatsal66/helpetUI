import React, { useState } from 'react';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';

const MainFaqCard = () => {
  const [activeMainCard, setActiveMainCard] = useState('');

  return (
    <div style={{
      paddingTop: '200px',
    }}>
      <div style={{
        width: '50%',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div>
            <Question1 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
          <div>
            <Question2 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
          <div>
            <Question3 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
          <div>
            <Question4 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
          <div>
            <Question5 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
          <div>
            <Question6 activeMainCard={activeMainCard} setActiveMainCard={setActiveMainCard}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainFaqCard