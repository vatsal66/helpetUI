import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

import { Checkbox } from '@components/atoms';

import CardLibrettoRoad from '@assets/images/Librettosanitario/CardLibrettoRoad.png';
import RightRoad from '@assets/images/common/RightRoadWithTopCar.svg';
import LargeThreeTree from '@assets/images/common/LargeThreeTree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';
import ArrowDownwardIcon from '@assets/images/Professional/professional.svg';

import {
  BorderLine, InputField, InputTile,
  LargeThreeTreeStyle,
  MiddleCard, RightRoadStyle, SaveButton, SmallGraceStyle, Title,
} from './styled';

const ProfessionalForm = () => {
  return (
    <div style={{
      padding: '150px 0 0 0',
      display: 'flex',
      width: '55%',
      margin: '0 auto',
      flexDirection: 'column',
      gap: '40px',
      marginBottom: '500px',
      position: 'relative',
      zIndex: 2,
    }}>
      <Title>
        Per maggiori informazioni compila il form!
      </Title>
      <div style={{ position: 'relative' }}>

        <MiddleCard>
          <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
            <InputField>
              <InputTile>
              Nome*
              </InputTile>
              <input
                placeholder="es. Marco"
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Cognome*
              </InputTile>
              <input
                placeholder="es. Rossi"
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Data di nascita*
              </InputTile>
              <input
                placeholder="GG/MM/AAAA"
                className="custom-placeholder"
              />
            </InputField>
          </div>

          <BorderLine />

          <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
            <InputField>
              <InputTile>
              Professione*
              </InputTile>
              <input
                placeholder="es. Veterinario"
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Nome attività*
              </InputTile>
              <input
                placeholder="es. Clinica PetCure"
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Sede attività*
              </InputTile>
              <Autocomplete
                value={null}
                popupIcon={<ArrowDownwardIcon />}
                placeholder="es. Via Po, 102 - Rasto"
                options={[]}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    fontFamily: 'Nunito',
                    padding: '0!important',
                    background: '#ffffff',
                    borderRadius: '10px',
                    lineHeight: 'unset',
                    border: 'unset',
                    '& .MuiAutocomplete-input': {
                      padding: '12.5px 12px',
                      borderRadius: '10px',
                      fontSize: '16px',
                      fontWeight: 600,
                      lineHeight: 'unset',
                      height: 'unset',
                      caretColor: '#AAAABA',
                      color: '#AAAABA',
                      border: '3px solid #A00483',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'unset',
                      padding: 0,
                    },
                    '& .MuiAutocomplete-endAdornment': {
                      right: '15px',
                    },
                  },
                }}
                // className="custom-placeholder"
                renderInput={(params) => <TextField {...params} label="" />}
              />
            </InputField>
          </div>

          <BorderLine />

          <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
            <InputField>
              <InputTile>
              Telefono*
              </InputTile>
              <input
                placeholder="es +39 000 000 0000"
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Email*
              </InputTile>
              <input
                placeholder="es info@email.com"
                className="custom-placeholder"
              />
            </InputField>
            <InputField />
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            marginTop: '50px',
          }}>
            <Checkbox
              label="Salva il mio nome e l’email in questo browser per la prossima volta che commento"
              onClick={() => {}}
            />
            <SaveButton>Invia</SaveButton>
          </div>

        </MiddleCard>

        <div style={{ position: 'absolute', left: '-50%', top: 'calc(50% - 34px)', zIndex: 1 }}>
          <img src={CardLibrettoRoad} alt=""  />
        </div>
      </div>

      <style>
        {`
          .custom-placeholder {
            background-color: #ffffff;
            border: 3px solid #A00483;
            border-radius: 10px;
            outline: none;
            color: #AAAABA;
            font-size: 16px;
            font-weight: 700;
            caret-color: #AAAABA;
            padding: 14px 12px;
            width: 100%;
          }
          .custom-placeholder::placeholder {
            color: #AAAABA;
          }
        `}
      </style>

      <RightRoad style={RightRoadStyle}/>
      <LargeThreeTree style={LargeThreeTreeStyle}/>
      <SmallGrace style={SmallGraceStyle}/>
    </div>
  );
};

export default ProfessionalForm;