import React from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';

import { Checkbox } from '@components/atoms';

import { BorderLine, InputField, InputTile, MiddleCard, Title } from './styled';

const ProfessionalForm = () => {
  return (
    <div style={{
      padding: '150px 0 0 0',
      display: 'flex',
      width: '55%',
      margin: '0 auto',
      flexDirection: 'column',
    }}>
      <Title>
        Per maggiori informazioni compila il form!
      </Title>
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
        }}>
          <Checkbox
            label="Salva il mio nome e l’email in questo browser per la prossima volta che commento"
            onClick={() => {}}
          />
          <Button className={{ width: 'fit-content' }} padding={[12, 47]}>Invia</Button>
        </div>
      </MiddleCard>
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
    </div>
  );
};

export default ProfessionalForm;