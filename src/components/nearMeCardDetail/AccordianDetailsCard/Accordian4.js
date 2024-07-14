import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

import ArrowDown from '@assets/images/NearMeCard/arrowDown.svg'
import { PaginationText, SubTitle, SubTitleAccordian4, SummeryTitle, Title, TitleAccordian4 } from './style'

import LeftArrow from '@assets/images/NearMeDetail/leftArrow.svg';
import RightArrow from '@assets/images/NearMeDetail/rightArrow.svg';

const Accordian4 = ({ handleChange, expanded }) => {
  return (
    <Accordion sx={{
      border: '5px solid #001A75!important',
      borderRadius: '45px!important',
      zIndex: 2,
    }} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
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
          10 Recensioni
        </Title>
        <div style={{ display: 'flex', width: '100%', gap: '80px' }}>
          <div style={{ display: 'flex', width: '50%', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ 
                  fontSize: '20px',
                  fontWeight: '900',
                  background: '#C1C8FF',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  AR
                </div> 
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TitleAccordian4>
                    Antonio Rossi
                  </TitleAccordian4>
                  <SubTitleAccordian4>
                    13 febbraio 2024 - Dr. Luigi Neri
                  </SubTitleAccordian4>
                </div>
              </div>
              <div style={{ width: '80%' }}>
                <SubTitleAccordian4>
                  Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet 
                </SubTitleAccordian4>
              </div>
            </div>
            <div style={{ padding: '30px 0' }}>
              <div style={{ borderTop: '2px solid #001A75' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ 
                  fontSize: '20px',
                  fontWeight: '900',
                  background: '#C1C8FF',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  AR
                </div> 
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TitleAccordian4>
                    Antonio Rossi
                  </TitleAccordian4>
                  <SubTitleAccordian4>
                    13 febbraio 2024 - Dr. Luigi Neri
                  </SubTitleAccordian4>
                </div>
              </div>
              <div style={{ width: '80%' }}>
                <SubTitleAccordian4>
                  Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet 
                </SubTitleAccordian4>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', width: '50%', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ 
                  fontSize: '20px',
                  fontWeight: '900',
                  background: '#C1C8FF',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  AR
                </div> 
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TitleAccordian4>
                    Antonio Rossi
                  </TitleAccordian4>
                  <SubTitleAccordian4>
                    13 febbraio 2024 - Dr. Luigi Neri
                  </SubTitleAccordian4>
                </div>
              </div>
              <div style={{ width: '80%' }}>
                <SubTitleAccordian4>
                  Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet 
                </SubTitleAccordian4>
              </div>
            </div>
            <div style={{ padding: '30px 0' }}>
              <div style={{ borderTop: '2px solid #001A75' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ 
                  fontSize: '20px',
                  fontWeight: '900',
                  background: '#C1C8FF',
                  borderRadius: '50%',
                  color: '#ffffff',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  AR
                </div> 
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <TitleAccordian4>
                    Antonio Rossi
                  </TitleAccordian4>
                  <SubTitleAccordian4>
                    13 febbraio 2024 - Dr. Luigi Neri
                  </SubTitleAccordian4>
                </div>
              </div>
              <div style={{ width: '80%' }}>
                <SubTitleAccordian4>
                  Quaerat sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet, sodales sapien euismod purus blandit a purus ipsum primis in cubilia laoreet 
                </SubTitleAccordian4>
              </div>
            </div>
          </div>
        </div>
        <div style={{ 
          width: '100%',
          display: 'flex', 
          justifyContent: 'center',
          margin: '65px auto 50px',
        }}>
          <div style={{
            border: '4px solid #001A75',
            background: '#0017E5',
            borderRadius: '20px',
            display: 'flex',
            width: 'fit-content'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              borderRight: '4px solid #001A75',
              padding: '7px 15px'
            }}>
              <LeftArrow />
            </div>
            <PaginationText style={{ padding: '7px 15px', borderRight: '4px solid #001A75' }}>
              1
            </PaginationText>
            <PaginationText style={{ padding: '7px 15px', borderRight: '4px solid #001A75' }}>
              2
            </PaginationText>
            <PaginationText style={{ padding: '7px 15px', borderRight: '4px solid #001A75' }}>
              3
            </PaginationText>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '7px 15px'
            }}>
              <RightArrow />
            </div>
          </div>
        </div>
      </AccordionDetails>
    </Accordion>
  )
}

export default Accordian4