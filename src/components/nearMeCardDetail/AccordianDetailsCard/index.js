import React from 'react'
import Accordian1 from './Accordian1'
import Accordian2 from './Accordian2'
import Accordian3 from './Accordian3'
import Accordian4 from './Accordian4'

const AccordianDetailsCard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      <Accordian1 />
      <Accordian2 />
      <Accordian3 />
      <Accordian4 />
    </div>
  )
}

export default AccordianDetailsCard