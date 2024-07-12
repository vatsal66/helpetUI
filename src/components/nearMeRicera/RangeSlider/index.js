import React, { useState } from 'react'
import Slider from '@mui/material/Slider';

import Tree from '@assets/images/common/Tree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import { SmallGraceStyle, TreeStyle } from './styled';

const RangeSlider = () => {
  const [value, setValue] = useState([50, 200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onMinValueChange = (event) => {
    const data = event.target.value.replace(/[€\s]/g, '')
    const newValue = Math.min(Number(data), value[1]);
    setValue([newValue, value[1]]);
  };

  const onMaxValueChange = (event) => {
    const data = event.target.value.replace(/[€\s]/g, '')
    const newValue = Math.max(Number(data), value[0]);
    setValue([value[0], newValue]);
  };

  return (
    <div style={{
      background: '#FFBC7D',
      border: '5px solid #AC4800',
      borderRadius: '65px',
      padding: '35px',
      gap: '15px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <Slider
        value={value}
        min={0}
        max={300}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          '& .MuiSlider-thumb': {
            width: '25px',
            height: '25px',
            background: '#F76908',
            border: '4px solid #AC4800'
          },
          '& .MuiSlider-track': {
            height: '16px',
            color: '#FF8310'
          },
          '& .MuiSlider-rail': {
            height: '16px',
            color: '#ffffff',
            opacity: 'unset',
          }
        }}
      />
      <div style={{
        display: 'flex',
        gap: '15px'
      }}>
        <input
          value={`${value[0]} €`}
          onChange={onMinValueChange}
          style={{
            backgroundColor: '#ffffff',
            border: '5px solid #AC4800',
            borderRadius: '20px',
            outline: 'none',
            width: '100%',
            color: '#AC4800',
            fontSize: '16px',
            fontWeight: '700',
            caretColor: '#AC4800',
            padding: '8px 0',
            textAlign: 'center'
          }}
        />
        <input
          value={`${value[1]} €`}
          onChange={onMaxValueChange}
          style={{
            backgroundColor: '#ffffff',
            border: '5px solid #AC4800',
            borderRadius: '20px',
            outline: 'none',
            width: '100%',
            color: '#AC4800',
            fontSize: '16px',
            fontWeight: '700',
            caretColor: '#AC4800',
            padding: '8px 0',
            textAlign: 'center'
          }}
        />
      </div>

      <Tree style={TreeStyle} />
      <SmallGrace style={SmallGraceStyle} />

    </div>
  )
}

export default RangeSlider