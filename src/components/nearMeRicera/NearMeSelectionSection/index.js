import React, { useState } from 'react'
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
  doctorBackgroundStyle,
  FilterHeader,
  FilterTitle,
  FilterValue,
  SliderHeader,
  PaginationText,
  LeftTruck,
  RightTruck,
  smallGraceStyle,
  smallGraceStyleFilte,
} from './styled'


import SmallMap from '@assets/images/NearMeDetail/smallMap.png';

import Adozioni from '@assets/images/NearMeDetail/Filter/Adozioni.svg';
import Benessere from '@assets/images/NearMeDetail/Filter/Benessere.svg';
import Cibo from '@assets/images/NearMeDetail/Filter/Cibo.svg';
import Emergenza from '@assets/images/NearMeDetail/Filter/Emergenza.svg';
import Hotel from '@assets/images/NearMeDetail/Filter/Hotel.svg';
import HotelPetFriendly from '@assets/images/NearMeDetail/Filter/HotelPetFriendly.svg';
import Petshop from '@assets/images/NearMeDetail/Filter/Petshop.svg';
import Salute from '@assets/images/NearMeDetail/Filter/Salute.svg';
import ServiziPet from '@assets/images/NearMeDetail/Filter/ServiziPet.svg';
import Spiaggia from '@assets/images/NearMeDetail/Filter/Spiaggia.svg';
import Svago from '@assets/images/NearMeDetail/Filter/Svago.svg';
import TaxiDog from '@assets/images/NearMeDetail/Filter/TaxiDog.svg';

import RatedSvg from '@assets/images/NearMeDetail/rated.svg';
import WithoutRatedSvg from '@assets/images/NearMeDetail/withoutRated.svg';

import LocationSvg from '@assets/images/NearMeDetail/location.svg';
import ClockSvg from '@assets/images/NearMeDetail/clock.svg';
import Store1 from '@assets/images/NearMeDetail/NewarMeDetailTabStore1.svg';
import Store2 from '@assets/images/NearMeDetail/NewarMeDetailTabStore2.svg';
import Store3 from '@assets/images/NearMeDetail/NewarMeDetailTabStore3.svg';
import Store4 from '@assets/images/NearMeDetail/NewarMeDetailTabStore4.svg';

import Doctor1 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor1.svg';
import Doctor4 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor4.svg';

import LeftArrow from '@assets/images/NearMeDetail/leftArrow.svg';
import RightArrow from '@assets/images/NearMeDetail/rightArrow.svg';

import LeftRoad from '@assets/images/PetId/LeftLongRoad.svg'
import RightImage from '@assets/images/PetId/PetIdRight.svg'
import SmallGrace from '@assets/images/common/smallGrace.svg';

import RangeSlider from '../RangeSlider';
import NearMeDialog from '../NearMeDialog';

const NearMeSelectionSection = () => {

  const [mapDialog, setMapDialog] = useState(false);

  const CardData = [{
    cardTitle: 'Clinica Polivet',
    cardName: 'Dr. Luigi Neri',
    cardNameDetail: 'Dentista veterinario',
    rating: 5,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Vedi disponibilità',
    storeBackground: <Store1 style={doctorBackgroundStyle} />,
    doctorImage: <Doctor1 style={doctorStyle} />,
  }, {
    cardTitle: 'Veterinario',
    cardName: 'Dott.ssa Sara Bianchi',
    cardNameDetail: 'Dentista veterinario',
    rating: 5,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Vedi disponibilità',
    storeBackground: <Store2 style={doctorBackgroundStyle} />,
    doctorImage: null,
  }, {
    cardTitle: 'Veterinario',
    cardName: 'Dr. Fabio Rossi',
    cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
    rating: 4,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Vedi disponibilità',
    storeBackground: <Store3 style={doctorBackgroundStyle} />,
    doctorImage: null,
  }, {
    cardTitle: 'Veterinario',
    cardName: 'Dr. Fabio Rossi',
    cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
    rating: 5,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Vedi disponibilità',
    storeBackground: <Store4 style={doctorBackgroundStyle} />,
    doctorImage: <Doctor4 style={doctorStyle} />,
  }, {
    cardTitle: 'Dott.ssa Paola Verdi',
    cardName: 'Dentista veterinario ',
    cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
    rating: 5,
    location: 'Via Po, 102 - Roma 00190',
    time: '09:30 - 12:30 | 14:30 - 18:00',
    middleContent: 'Vedi disponibilità',
    storeBackground: <Store4 style={doctorBackgroundStyle} />,
    doctorImage: <Doctor4 style={doctorStyle} />,
  }]

  const renderRating = (rating) => {
    const totalRating = 5;
    const rated = Array(rating).fill(<RatedSvg />);
    const withoutRated = Array(totalRating - rating).fill(<WithoutRatedSvg />);
    return [...rated, ...withoutRated];
  }

  const filterData = [{
    title: 'Adozioni',
    titleSvg: <Adozioni />,
    borderColor: '#A70F5B',
    backgroundColor: '#D92A82',
  }, {
    title: 'Benessere',
    titleSvg: <Benessere />,
    borderColor: '#007E60',
    backgroundColor: '#44D3A8',
  }, {
    title: 'Cibo',
    titleSvg: <Cibo />,
    borderColor: '#AC4800',
    backgroundColor: '#F76908',
  }, {
    title: 'Emergenza',
    titleSvg: <Emergenza />,
    borderColor: '#C91212',
    backgroundColor: '#E93737',
  }, {
    title: 'Hotel',
    titleSvg: <Hotel />,
    borderColor: '#754C39',
    backgroundColor: '#A87E62',
  }, {
    title: 'Hotel Pet Friendly',
    titleSvg: <HotelPetFriendly />,
    borderColor: '#A87E62',
    backgroundColor: '#D3AF85',
  }, {
    title: 'Pet Shop',
    titleSvg: <Petshop />,
    borderColor: '#74005E',
    backgroundColor: '#A00483',
  }, {
    title: 'Salute',
    titleSvg: <Salute />,
    borderColor: '#001A75',
    backgroundColor: '#0017E5',
  }, {
    title: 'Servizi Pet',
    titleSvg: <ServiziPet />,
    borderColor: '#62007A',
    backgroundColor: '#9814B9',
  }, {
    title: 'Spiaggia',
    titleSvg: <Spiaggia />,
    borderColor: '#0368B0',
    backgroundColor: '#00A2FD',
  }, {
    title: 'Svago',
    titleSvg: <Svago />,
    borderColor: '#3E9200',
    backgroundColor: '#76D100',
  }, {
    title: 'Taxi Dog',
    titleSvg: <TaxiDog />,
    borderColor: '#CC7E09',
    backgroundColor: '#FCC80F',
  }];

  const handleDialogOpen = () => {
    setMapDialog(true);
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          width: '80%',
          margin: '80px auto 0 auto',
          display: 'flex',
          gap: '70px',
          position: 'relative'
        }}>
          <div style={{
            width: '40%',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div>
              <img src={SmallMap} alt="" onClick={() => handleDialogOpen()} />
            </div>
            <div>
              <FilterHeader style={{position: 'relative'}}>
                Filtri:
                <SmallGrace style={smallGraceStyleFilte} />
              </FilterHeader>
              <FilterTitle>
                Categorie
              </FilterTitle>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '18px',
                width: '90%',
              }}>
                {filterData?.map((item) => (
                  <div style={{
                    border: `5px solid ${item?.borderColor}`,
                    background: item?.backgroundColor,
                    display: 'flex',
                    gap: '12px',
                    borderRadius: '45px',
                    padding: '12px 15px',
                    alignItems: 'center'
                  }}>
                    {item?.titleSvg}
                    <FilterValue>
                      {item?.title}
                    </FilterValue>
                  </div>
                ))}

              </div>
            </div>
            <div>
              <SliderHeader>
                Il tuo budget
              </SliderHeader>
              <div>
                <RangeSlider />
              </div>
            </div>
          </div>
          <div style={{
            width: '60%'
          }}>
            <Title>Dentista veterinario: 18 risultati trovati</Title>
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
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                      }}>
                        <div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', }}>
                            <CardRated>
                              {renderRating(item.rating)}
                            </CardRated>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
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
                              {item?.middleContent}
                            </InlineCard>
                          </div>
                        </div>
                      </div>
                    </CardDetailsLeft>
                    <CardDetailsRight>
                      <div style={{
                        position: 'absolute',
                        bottom: '50px',
                      }}>
                        {item?.storeBackground}
                        {item?.doctorImage}
                      </div>
                    </CardDetailsRight>
                  </CardDetails>
                </Card>
              ))}
            </CardSection>
          </div>
          <SmallGrace style={smallGraceStyle} />
        </div>
        <div style={{
          position: 'relative'
        }}>
          <div style={{
            width: '80%',
            margin: '180px auto 210px auto',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <div style={{
              border: '4px solid #007E60',
              background: '#44D3A8',
              borderRadius: '20px',
              padding: '0 10px',
              display: 'flex',
              width: 'fit-content'
            }}>            
              <div style={{
                display: 'flex',
                alignItems: 'center',
                borderRight: '4px solid #007E60',
                gap: '10px',
                paddingRight: '10px'
              }}>
                <LeftArrow />
                <PaginationText>
                  Precedente
                </PaginationText>
              </div>
              <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                1
              </PaginationText>
              <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                2
              </PaginationText>
              <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                ...
              </PaginationText>
              <PaginationText style={{ padding: '0 25px', borderRight: '4px solid #007E60' }}>
                5
              </PaginationText>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                paddingLeft: '10px'
              }}>
                <PaginationText>
                  Successivo
                </PaginationText>
                <RightArrow />
              </div>
            </div>
          </div>

          <LeftRoad style={LeftTruck} />
          <RightImage style={RightTruck} />
        </div>
        {mapDialog && <NearMeDialog mapDialog={mapDialog} setMapDialog={setMapDialog} CardData={CardData} renderRating={renderRating} />}
      </div>
    </>

  )
}

export default NearMeSelectionSection
