import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';

import ArrowDown from '@assets/images/NearMeCard/arrowDown.svg';
import User from '@assets/images/NearMeCard/user.svg';
import Location from '@assets/images/NearMeCard/location.svg';
import Website from '@assets/images/NearMeCard/website.svg';
import Email from '@assets/images/NearMeCard/email.svg';
import Phone from '@assets/images/NearMeCard/phonecall.svg';
import Ladline from '@assets/images/NearMeCard/ladline.svg';
import Facebook from '@assets/images/NearMeCard/facebook.svg';
import Instagram from '@assets/images/NearMeCard/instagram.svg';
import Linkdin from '@assets/images/NearMeCard/linkdin.svg';

import { AccordianTextheader, SummeryTitle } from './style';

const Accordian3 = ({ handleChange, expanded }) => {
  return (
    <Accordion sx={{
      border: '5px solid #001A75!important',
      borderRadius: '45px!important',
      zIndex: 2,
    }} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary
        expandIcon={<ArrowDown />}
        aria-controls="panel3-content"
        id="panel3-header"
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
          Contatti
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
          <div style={{ display: 'flex',gap: '12px', alignItems: 'center', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <User />
            <AccordianTextheader>Polivet - Policlinico veterinario Roma</AccordianTextheader>
          </div>
          <div style={{ display: 'flex',gap: '12px', alignItems: 'center', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <Location />
            <AccordianTextheader>Via Salaria, 1317 - Roma 00190</AccordianTextheader>
          </div>
          <div style={{ display: 'flex',gap: '12px', alignItems: 'center', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <Phone />
            <AccordianTextheader>+39 340 000 0000</AccordianTextheader>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%', padding: '30px 10px' }}>
            <Facebook />
            <Instagram />
            <Linkdin />
          </div>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          width: '50%',
          flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <Website />
            <AccordianTextheader>www.polivet.com</AccordianTextheader>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%', borderBottom: '2px solid #001A75', padding: '30px 10px' }}>
            <Email />
            <AccordianTextheader>info@polivet.com</AccordianTextheader>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%', padding: '30px 10px' }}>
            <Ladline />
            <AccordianTextheader>0678465938</AccordianTextheader>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default Accordian3;