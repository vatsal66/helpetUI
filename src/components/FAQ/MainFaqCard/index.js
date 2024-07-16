import React, { useState } from 'react';

import SmallGrace from '@assets/images/common/smallGrace.svg';
import TwoTree from '@assets/images/common/Tree.svg';
import LargeThreeTree from '@assets/images/common/LargeThreeTree.svg';
import TruckSvg from '@assets/images/common/Truck.svg';

import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import { LargeTreeStyle, SmallGraceStyle1, SmallGraceStyle2, Title, TruckStyle, TwoTreeStyle } from './style';

const MainFaqCard = () => {
  const [activeMainCard, setActiveMainCard] = useState('');
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{
      paddingTop: '200px',
    }}>
      <div style={{
        width: '50%',
        margin: '0 auto',
      }}>
        <Title>
          FAQ
        </Title>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', margin: '45px 0 500px 0', position: 'relative' }}>
          <div style={{ zIndex: 1 }}>
            <Question1
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <div style={{ zIndex: 1 }}>
            <Question2
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <div style={{ zIndex: 1 }}>
            <Question3
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <div style={{ zIndex: 1 }}>
            <Question4
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <div style={{ zIndex: 1 }}>
            <Question5
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <div style={{ zIndex: 1 }}>
            <Question6
              activeMainCard={activeMainCard}
              setActiveMainCard={setActiveMainCard}
              handleChange={handleChange}
              expanded={expanded}
            />
          </div>
          <SmallGrace style={SmallGraceStyle1} />
          <SmallGrace style={SmallGraceStyle2} />
          <TwoTree style={TwoTreeStyle} />
          <LargeThreeTree style={LargeTreeStyle} />
          <TruckSvg style={TruckStyle} />
        </div>
      </div>
    </div>
  );
};

export default MainFaqCard;