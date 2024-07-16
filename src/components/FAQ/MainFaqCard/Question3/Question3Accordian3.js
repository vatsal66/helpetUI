import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

import ArrowDown from '@assets/images/FAQ/arrowDown.svg';

import { SubTitle, SummeryTitle } from './style';

const Question3Accordian3 = ({ handleChange, expanded }) => {
  return (
    <Accordion sx={{
      border: '5px solid #62007A!important',
      background: '#BF57F0',
      borderRadius: '45px!important',
      zIndex: 2,
    }} expanded={expanded === 'Question3Accordian3'} onChange={handleChange('Question3Accordian3')}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="Question3Accordian3-content"
        id="Question3Accordian3-header"
        sx={{
          padding: '10px 40px',
          '& .MuiAccordionSummary-content': {
            marginTop: '25px',
            marginBottom: '25px',
          },
          '& .MuiAccordionSummary-content.Mui-expanded': {
            margin: '25px 0 0 0',
          },
          '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            margin: '25px 0 0 0',
          },
        }}
      >
        <SummeryTitle>
          Ho dimenticato la password, cosa devo fare?
        </SummeryTitle>
      </AccordionSummary>
      <AccordionDetails sx={{
        padding: '25px 40px 35px 40px',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}>
        <div>
          <SubTitle>
          Ci sono diversi modi di creare un account: usando la tua email, il tuo numero di telefono, l’account Google, Apple o Facebook.
          </SubTitle>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          paddingLeft: '8px',
        }}>
          <SubTitle>
            1. Apri l’app, seleziona una delle opzioni di registrazione o clicca sul <p style={{ fontSize: '16px', fontWeight: 800, color: '#62007A' }}>&nbsp;bottone Registrati&nbsp;</p>
          </SubTitle>
          <SubTitle>
            2. Subito dopo, <p style={{ fontSize: '16px', fontWeight: 800, color: '#62007A' }}>&nbsp;compila i form&nbsp;</p> e ti invieremo un’email con il codice di conferma
          </SubTitle>
          <SubTitle>
            3. <p style={{ fontSize: '16px', fontWeight: 800, color: '#62007A' }}>&nbsp;Copia e incolla il codice&nbsp;</p> ricevuto per completare.
          </SubTitle>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Question3Accordian3;