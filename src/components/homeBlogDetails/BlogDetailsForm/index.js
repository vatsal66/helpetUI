import React, { useState } from 'react';

import { Checkbox } from '@components/atoms';

import LeftRoad from '@assets/images/BlogDetails/blogDetailsLeftRoad.svg';
import RightRoad from '@assets/images/BlogDetails/blogDetailsRightRoad.svg';
import RightImageHome from '@assets/images/PetId/PetIdRight.svg';

import {
  InputField, InputTile,
  Title, MiddleCard, SaveButton,
  RightImageHomeStyle,
} from './styled';

import SubmitDialog from '../SubmitDialog';

const BlogDetailsForm = () => {
  const [submitDialog, setSubmitDialog] = useState(false);
  return (
    <div style={{
      padding: '150px 0 330px 0',
      display: 'flex',
      width: '55%',
      margin: '0 auto',
      flexDirection: 'column',
      gap: '40px',
      position: 'relative',
    }}>
      <Title>
        Lascia un commento
      </Title>
      <div style={{ position: 'relative' }}>

        <MiddleCard>
          <div style={{ display: 'flex', width: '100%' }}>
            <InputField style={{ width: '100%' }}>
              <InputTile>
              Commento*
              </InputTile>
              <textarea
                className="custom-placeholders"
                cols="40"
                rows="5"
              />
            </InputField>
          </div>

          <div style={{ display: 'flex', gap: '40px', width: '100%' }}>
            <InputField>
              <InputTile>
              Nome*
              </InputTile>
              <input
                className="custom-placeholder"
              />
            </InputField>
            <InputField>
              <InputTile>
              Email*
              </InputTile>
              <input
                className="custom-placeholder"
              />
            </InputField>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            marginTop: '8px',
          }}>
            <Checkbox
              label="Salva il mio nome e l’email in questo browser per la prossima volta che commento"
              onClick={() => {}}
            />
            <SaveButton onClick={() => setSubmitDialog(true)}>Invia commento</SaveButton>
          </div>

        </MiddleCard>

        <LeftRoad style={{ position: 'absolute', zIndex: 1, left: '-210px', top: 'calc(50% - 38px)' }}/>
        <RightRoad style={{ position: 'absolute', zIndex: 1, left: '90%', top: 'calc(50% - 38px)' }}/>
      </div>

      <style>
        {`
          .custom-placeholder {
            background-color: #ffffff;
            border: unset;
            border-radius: 10px;
            outline: none;
            color: #AAAABA;
            font-size: 16px;
            font-weight: 700;
            caret-color: #AAAABA;
            padding: 14px 12px;
            width: 100%;
            margin-left: 0;
            height: 34px;
          }
          .custom-placeholder::placeholder {
            color: #AAAABA;
          }
          .custom-placeholders {
            background-color: #ffffff;
            border: unset;
            border-radius: 10px;
            outline: none;
            color: #AAAABA;
            font-size: 16px;
            font-weight: 700;
            caret-color: #AAAABA;
            padding: 14px 12px;
            width: 100%;
            margin-left: 0;
            height: 87px;
          }
          .custom-placeholders::placeholder {
            color: #AAAABA;
          }
        `}
      </style>

      <RightImageHome style={RightImageHomeStyle}/>

      {submitDialog && <SubmitDialog submitDialog={submitDialog} setSubmitDialog={setSubmitDialog}/>}
    </div>
  );
};

export default BlogDetailsForm;