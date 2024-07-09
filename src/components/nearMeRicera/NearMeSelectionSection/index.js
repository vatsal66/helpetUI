import React from 'react'
import { 
    Card,
    CardDetailsLeft, CardDetailsDesc,
    CardDetailsTitle, CardHeader,
    CardRated, CardSection,
    CardTitle, ClockDetailsText,
    InlineCard, LocationDetailsText, Title, 
    CardDetails,
    CardDetailsRight,
    doctorStyle,
    doctorBackgroundStyle
  } from './styled'

import RatedSvg from '@assets/images/NearMeDetail/rated.svg';
import LocationSvg from '@assets/images/NearMeDetail/location.svg';
import ClockSvg from '@assets/images/NearMeDetail/clock.svg';
import Store1 from '@assets/images/NearMeDetail/NewarMeDetailTabStore1.svg';
import Doctor1 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor1.svg';

const NearMeSelectionSection = () => {
  return (
    <div style={{
      display: 'flex',
      width: '80%',
      margin: '0 auto',
      gap: '60px',
    }}>
      <div style={{
        width: '40%'
      }}>
        Section Left
      </div>
      <div  style={{
        width: '60%'
      }}>
        <Title>Dentista veterinario: 18 risultati trovati</Title>
        <CardSection>
          <Card>
            <CardHeader>
              <CardTitle>
                Clinica Polivet
              </CardTitle>
            </CardHeader>
            <CardDetails>
              <CardDetailsLeft>
                <CardDetailsTitle>
                  Dr. Luigi Neri
                </CardDetailsTitle>
                <CardDetailsDesc>
                  Dentista veterinario
                </CardDetailsDesc>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', }}>
                      <CardRated>
                        <RatedSvg />
                        <RatedSvg />
                        <RatedSvg />
                        <RatedSvg />
                        <RatedSvg />
                      </CardRated>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <LocationSvg />
                          <LocationDetailsText>
                            Via Po, 102 - Roma 00190
                          </LocationDetailsText>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <ClockSvg />
                          <ClockDetailsText>
                            09:30 - 12:30 | 14:30 - 18:00
                          </ClockDetailsText>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div style={{
                      border: '5px solid #001A75',
                      backgroundColor: '#0017E5',
                      padding: '3px 16px',
                      borderRadius: '25px',
                    }}>
                      <InlineCard>
                        Vedi disponibilità          
                      </InlineCard>
                    </div>
                  </div>
                </div>
              </CardDetailsLeft>
              <CardDetailsRight>
                <Store1 style={doctorBackgroundStyle}/>
                <Doctor1 style={doctorStyle} />
              </CardDetailsRight>
            </CardDetails>
          </Card>
        </CardSection>
      </div>
    </div>
  )
}

export default NearMeSelectionSection

// 72