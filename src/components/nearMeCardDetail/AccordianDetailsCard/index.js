import React, { useState } from 'react';

import RightRoad from '@assets/images/common/rightRoadWithcar.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';
import Tree from '@assets/images/common/Tree.svg';

import Accordian1 from './Accordian1';
import Accordian2 from './Accordian2';
import Accordian3 from './Accordian3';
import Accordian4 from './Accordian4';
import { SmallGraceStyle, SmallGraceStyle1, SmallGraceStyle2, TreeStyle } from './style';

import AppButton from '../AppButton';

const AccordianDetailsCard = () => {
  const [expanded, setExpanded] = useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', position: 'relative' }}>
        <Tree style={TreeStyle} />
        <SmallGrace style={SmallGraceStyle} />
        <SmallGrace style={SmallGraceStyle1} />
        <SmallGrace style={SmallGraceStyle2} />

        <div>
          <Accordian1 handleChange={handleChange} expanded={expanded} />
        </div>
        <div>
          <Accordian2 handleChange={handleChange} expanded={expanded} />
        </div>
        <div>
          <Accordian3 handleChange={handleChange} expanded={expanded} />
        </div>
        <div>
          <Accordian4 handleChange={handleChange} expanded={expanded} />
        </div>
        <div style={{
          position: 'absolute',
          right: '-20%',
          top: '869px',
          zIndex: 1,
          height: (expanded === false || expanded === '') && '700px',
          overflow: 'hidden',
        }}>
          <RightRoad  />
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 0 350px 0',
      }}>
        <AppButton />
      </div>
    </div>
  );
};

export default AccordianDetailsCard;