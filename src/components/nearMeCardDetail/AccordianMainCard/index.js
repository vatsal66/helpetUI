import React from 'react'

import Store1 from '@assets/images/NearMeDetail/NewarMeDetailTabStore1.svg';
import Doctor1 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor1.svg';

import DoctorIcon from '@assets/images/NearMeCard/doctor.svg';
import MEdicalKitIcon from '@assets/images/NearMeCard/medicalBeg.svg';
import MedicalEmergancy from '@assets/images/NearMeCard/medicalEmergancy.svg';

import RatedSvg from '@assets/images/NearMeDetail/rated.svg';
import WithoutRatedSvg from '@assets/images/NearMeDetail/withoutRated.svg';

import LocationSvg from '@assets/images/NearMeDetail/location.svg';
import ClockSvg from '@assets/images/NearMeDetail/clock.svg';

import SmallMap from '@assets/images/NearMeDetail/smallMap.png';

import { 
  Card, CardCenter, CardDetails, CardDetailsDesc,
  CardDetailsLeft, CardDetailsRight, 
  CardDetailsTitle, CardHeader, CardRated,
  CardSection, CardTitle, ClockDetailsText,
  doctorBackgroundStyle, doctorStyle,
  InlineCard, LocationDetailsText, 
  RatingText
} from './style';
import AccordianDetailsCard from '../AccordianDetailsCard';


const AccordianMainCard = () => {

  const CardData = [{
    cardTitle: 'Clinica Polivet',
    cardName: 'Dr. Luigi Neri',
    cardNameDetail: 'Dentista veterinario',
    rating: 5,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Clinica',
    middleContentIcon: <DoctorIcon />,
    middleContent2: 'Veterinario',
    middleContentIcon2: <MEdicalKitIcon />,
    middleContent3: 'Ospedale',
    middleContentIcon3: <MedicalEmergancy />,
    storeBackground: <Store1 style={doctorBackgroundStyle} />,
    doctorImage: <Doctor1 style={doctorStyle} />,
  }];

  const renderRating = (rating) => {
    const totalRating = 5;
    const rated = Array(rating).fill(<RatedSvg />);
    const withoutRated = Array(totalRating - rating).fill(<WithoutRatedSvg />);
    return [...rated, ...withoutRated];
  }
  
  return (
    <div style={{
      display: 'flex',
      width: '80%',
      margin: '0 auto',
      paddingTop: '200px',
      flexDirection: 'column',
      gap: '36px',
    }}>
      <CardSection>
        {CardData?.map((item) => (
          <Card>
            <CardHeader>
              <CardTitle>
                {item?.cardTitle}
              </CardTitle>
            </CardHeader>
            <CardDetails>
              <CardDetailsLeft>
                <CardDetailsTitle>
                  {item?.cardName}
                </CardDetailsTitle>
                <CardDetailsDesc>
                  {item?.cardNameDetail}
                </CardDetailsDesc>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
                  <CardRated>
                    {renderRating(item.rating)}
                    <RatingText>
                      10 Recensioni
                    </RatingText>
                  </CardRated>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <LocationSvg />
                      <LocationDetailsText>
                        {item?.location}
                      </LocationDetailsText>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <ClockSvg />
                      <ClockDetailsText>
                        {item?.time}
                      </ClockDetailsText>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                    <div style={{
                      display: 'flex',
                      border: '5px solid #001A75',
                      backgroundColor: '#0017E5',
                      padding: '4px 18px',
                      borderRadius: '45px',
                      gap: '8px'
                    }}>
                        {item?.middleContentIcon}
                      <InlineCard>
                        {item?.middleContent}
                      </InlineCard>
                    </div>
                    <div style={{
                      display: 'flex',
                      border: '5px solid #001A75',
                      backgroundColor: '#0017E5',
                      padding: '4px 18px',
                      borderRadius: '45px',
                      gap: '8px'
                    }}>
                      {item?.middleContentIcon2}
                      <InlineCard>
                        {item?.middleContent2}
                      </InlineCard>
                    </div>
                    <div style={{
                      display: 'flex',
                      border: '5px solid #C91212',
                      backgroundColor: '#E93737',
                      padding: '4px 18px',
                      borderRadius: '45px',
                      gap: '8px'
                    }}>
                      {item?.middleContentIcon3}
                      <InlineCard>
                        {item?.middleContent3}
                      </InlineCard>
                    </div>
                  </div>
              </div>
              </CardDetailsLeft>
              <CardCenter>
                <img src={SmallMap} alt="" style={{ width: '299px', height: '213px' }}/>
              </CardCenter>
              <CardDetailsRight>
                <div style={{
                  position: 'absolute',
                  bottom: '85px',
                }}>
                  {item?.storeBackground}
                  {item?.doctorImage}
                </div>
              </CardDetailsRight>
            </CardDetails>
          </Card>
        ))}
      </CardSection>
      <AccordianDetailsCard /> 
    </div>
  )
}

export default AccordianMainCard