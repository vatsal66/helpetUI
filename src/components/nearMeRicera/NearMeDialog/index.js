import { Dialog, DialogContent } from '@mui/material'
import React from 'react'

import DialogCloseIcon from '@assets/images/NearMeDetail/DialogClose.svg';
import DialogMapIcon from '@assets/images/NearMeDetail/DialogMap.svg';

import Store1 from '@assets/images/NearMeDetail/NewarMeDetailTabStore1.svg';
import Store2 from '@assets/images/NearMeDetail/NewarMeDetailTabStore2.svg';
import Store3 from '@assets/images/NearMeDetail/NewarMeDetailTabStore3.svg';
import Store4 from '@assets/images/NearMeDetail/NewarMeDetailTabStore4.svg';

import Doctor1 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor1.svg';
import Doctor4 from '@assets/images/NearMeDetail/NewarMeDetailTabDoctor4.svg';

import { 
  Card, CardDetails,
  CardDetailsDesc, CardDetailsLeft, CardDetailsRight,
  CardDetailsTitle, CardHeader, CardRated,
  CardSection, CardTitle,
  closeIconStyle, doctorBackgroundStyle, doctorStyle, InlineCard, Title
} from './styled';

const CardData = [{
  cardTitle: 'Clinica Polivet',
  cardName: 'Dr. Luigi Neri',
  cardNameDetail: 'Dentista veterinario',
  rating: 5,
  middleContent: 'Vedi disponibilità',
  storeBackground: <Store1 style={doctorBackgroundStyle} />,
  doctorImage: <Doctor1 style={doctorStyle} />,
}, {
  cardTitle: 'Veterinario',
  cardName: 'Dott.ssa Sara Bianchi',
  cardNameDetail: 'Dentista veterinario',
  rating: 5,
  middleContent: 'Vedi disponibilità',
  storeBackground: <Store2 style={doctorBackgroundStyle} />,
  doctorImage: <Doctor1 style={doctorStyle} />,
}, {
  cardTitle: 'Veterinario',
  cardName: 'Dr. Fabio Rossi',
  cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
  rating: 4,
  middleContent: 'Vedi disponibilità',
  storeBackground: <Store3 style={doctorBackgroundStyle} />,
  doctorImage: <Doctor1 style={doctorStyle} />,
}, {
  cardTitle: 'Veterinario',
  cardName: 'Dr. Fabio Rossi',
  cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
  rating: 5,
  middleContent: 'Vedi disponibilità',
  storeBackground: <Store4 style={doctorBackgroundStyle} />,
  doctorImage: <Doctor4 style={doctorStyle} />,
}, {
  cardTitle: 'Dott.ssa Paola Verdi',
  cardName: 'Dentista veterinario ',
  cardNameDetail: 'Dentista veterinario - Chirurgo veterinario',
  rating: 5,
  middleContent: 'Vedi disponibilità',
  storeBackground: <Store4 style={doctorBackgroundStyle} />,
  doctorImage: <Doctor4 style={doctorStyle} />,
}]

const NearMeDialog = ({ mapDialog, setMapDialog, renderRating }) => {

  return (
    <>
      <Dialog
        open={mapDialog}
        onClose={() => setMapDialog(false)}
        fullWidth
        sx={{
          width: '74%',
          left: '13%',
          right: '13%',
          '& .MuiDialog-paper': {
            margin: 0,
            maxWidth: 'unset',
            width: '100%',
            background: 'none',
            boxShadow: 'none'
          }
        }}
      >
        <DialogContent sx={{
          position: 'relative',
          overflow: 'hidden',
          padding: '36px 30px',
          display: 'flex',
          border: '5px solid #007E60',
          borderRadius: '50px',
          background: '#ffffff',
          gap: '24px'
        }}>
          <DialogCloseIcon style={closeIconStyle}/>
          <div style={{
            width: '40%',
            overflowY: 'scroll'
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
                      <div style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                        }}>
                          <div>
                            <CardDetailsTitle>
                              {item?.cardName}
                            </CardDetailsTitle>
                            <CardDetailsDesc>
                              {item?.cardNameDetail}
                            </CardDetailsDesc>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', }}>
                              <CardRated>
                                {renderRating(item.rating)}
                              </CardRated>
                            </div>
                          </div>

                          <div style={{
                            border: '3px solid #001A75',
                            backgroundColor: '#0017E5',
                            padding: '2px 8px',
                            borderRadius: '13px',
                            height: 'fit-content',
                            display: 'flex',
                            alignSelf: 'flex-end',
                          }}>
                            <InlineCard>
                              {item?.middleContent}
                            </InlineCard>
                          </div>
                        </div>
                      </CardDetailsLeft>
                      <CardDetailsRight>
                        <div style={{
                          position: 'absolute',
                          bottom: '40px',
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
          <div style={{
            width: '60%'
          }}>
            <DialogMapIcon />
          </div>
        </DialogContent>
      </Dialog>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 15px;
            background: #44D3A8;
            border-radius: 16px;
          }
          ::-webkit-scrollbar-track {
            border-radius: 15px;
          }
          ::-webkit-scrollbar-thumb {
            background: unset;
            border: 2px solid #007E60;
            border-radius: 1px;
          }
          ::-webkit-scrollbar-button:end:increment {
            background-image: url(../assets/images/bottomIcon.svg);
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            background-color: transparent;
          }

          ::-webkit-scrollbar-button:start:decrement {
            background-image: url(../assets/images/upperIcon.svg);
            background-repeat: no-repeat;
            background-position: center;
            border: none;
            background-color: transparent;
          }
        `}
      </style>
    </>
  )
}

export default NearMeDialog

// ::-webkit-scrollbar-thumb:hover {
//   background: #b30000; 
// }

// ::-webkit-scrollbar-button:end:increment {
//   background-image: url(../assets/images/upperIcon.svg);
// }

// ::-webkit-scrollbar-button:start:decrement {
// background-image: url(../assets/images/bottomIcon.svg);
// }