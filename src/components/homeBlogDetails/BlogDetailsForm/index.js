import React from 'react';

import { Checkbox } from '@components/atoms';

import CardLibrettoRoad from '@assets/images/Librettosanitario/CardLibrettoRoad.png';
import RightRoad from '@assets/images/common/RightRoadWithTopCar.svg';
import LargeThreeTree from '@assets/images/common/LargeThreeTree.svg';
import SmallGrace from '@assets/images/common/smallGrace.svg';

import {
  InputField, InputTile,
  LargeThreeTreeStyle,
  MiddleCard, RightRoadStyle, SaveButton, SmallGraceStyle, Title,
} from './styled';

const BlogDetailsForm = () => {
  return (
    <div style={{
      padding: '150px 0 350 0',
      display: 'flex',
      width: '55%',
      margin: '0 auto',
      flexDirection: 'column',
      gap: '40px',
      position: 'relative',
      zIndex: 2,
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
                className="custom-placeholder"
                cols="40"
                rows="5"
                height="87px"
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
            marginTop: '30px',
          }}>
            <Checkbox
              label="Salva il mio nome e l’email in questo browser per la prossima volta che commento"
              onClick={() => {}}
            />
            <SaveButton>Invia commento</SaveButton>
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
        `}
      </style>

      <RightRoad style={RightRoadStyle}/>
      <LargeThreeTree style={LargeThreeTreeStyle}/>
      <SmallGrace style={SmallGraceStyle}/>
    </div>
  );
};

export default BlogDetailsForm;