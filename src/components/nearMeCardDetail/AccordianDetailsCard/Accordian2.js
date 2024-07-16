import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

import ArrowDown from '@assets/images/NearMeCard/arrowDown.svg';

import { AccordianTextheader, RoundPoint, SummeryTitle } from './style';

const Accordian2 = ({ handleChange, expanded }) => {
  return (
    <Accordion sx={{
      border: '5px solid #001A75!important',
      borderRadius: '45px!important',
      zIndex: 2,
    }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="panel2-content"
        id="panel2-header"
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
          Servizi disponibili
        </SummeryTitle>
      </AccordionSummary>
      <AccordionDetails sx={{
        padding: '8px 40px 20px 40px',
        minHeight: '150px',
        display: 'flex',
        gap: '50px',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '75%' }}>
              <RoundPoint />
              <AccordianTextheader>Prima visita</AccordianTextheader>
            </div>
            <div style={{ width: '25%' }}>
              <AccordianTextheader>
                €30
              </AccordianTextheader>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '75%' }}>
              <RoundPoint />
              <AccordianTextheader>Visita di controllo</AccordianTextheader>
            </div>
            <div style={{ width: '25%' }}>
              <AccordianTextheader>
                €30
              </AccordianTextheader>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '30px 10px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '75%' }}>
              <RoundPoint />
              <AccordianTextheader>Estrazione dente</AccordianTextheader>
            </div>
            <div style={{ width: '25%' }}>
              <AccordianTextheader>
                €100 - €300+
              </AccordianTextheader>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '75%' }}>
              <RoundPoint />
              <AccordianTextheader>Pulizia denti</AccordianTextheader>
            </div>
            <div style={{ width: '25%' }}>
              <AccordianTextheader>
                €50 - €100+
              </AccordianTextheader>
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian2;