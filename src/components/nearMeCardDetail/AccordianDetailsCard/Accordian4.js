import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

import ArrowDown from '@assets/images/NearMeCard/arrowDown.svg'
import { SubTitle, SummeryTitle, Title } from './style'

const Accordian4 = () => {
  return (
    <Accordion sx={{
      border: '5px solid #001A75!important',
      borderRadius: '45px!important',
    }}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="panel4-content"
        id="panel4-header"
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
          Recensioni
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

export default Accordian4