import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

import ArrowDown from '@assets/images/FAQ/arrowDown.svg';
import { SubTitle, SummeryTitle, Title } from './style'

const Question1Accordian2 = ({ handleChange, expanded }) => {
  return (
    <Accordion sx={{
      border: '5px solid #A00483!important',
      background: '#C54EAE',
      borderRadius: '45px!important',
      zIndex: 2,
    }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{
          padding: '10px 40px',
          '& .MuiAccordionSummary-content': {
            marginTop: '25px',
            marginBottom: '25px'
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '25px 0 0 0'
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            margin: '25px 0 0 0'
          }
        }}
      >
        <SummeryTitle>
          Cos’è un codice di riferimento?
        </SummeryTitle>
      </AccordionSummary>
      <AccordionDetails sx={{
        padding: '8px 40px 20px 40px',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
        <Title>
          Clinica Polivet
        </Title>
        <SubTitle style={{ width: '80%' }}>
          Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet 
        </SubTitle>
      </AccordionDetails>
    </Accordion>
  )
}

export default Question1Accordian2