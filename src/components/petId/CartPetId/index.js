import React, { useState } from 'react'
import { Subtitle, Title, TitleContainer, CardPetId, CardDetailsLeft, CardDetailsRight, CardDetailsLeftActive, CardDetailsRightActive, HeaderText, HeaderSubText } from './styled'
import ScannerIcon from '@assets/images/PetId/microchip.svg'
import PlaneIcon from '@assets/images/PetId/union.svg'

const CartPetId = () => {
  const [firstCardActive, setFirstCardActive] = useState(false);
  const [secondCardActive, setSecondCardActive] = useState(false);

  const handleMouseEnter = () => {
    setFirstCardActive(true);
  };

  const handleMouseLeave = () => {
    setFirstCardActive(false);
  };

  const handleMouseEnterSecond = () => {
    setSecondCardActive(true);
  };

  const handleMouseLeaveSecond = () => {
    setSecondCardActive(false);
  };

  return (
    <div style={{
      width: '80%',
      margin: '0 auto',
      paddingTop: '50px'
    }}>
      <TitleContainer>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <Title>Cos’è il Pet ID</Title>
          <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
            a purus </Subtitle>
        </div>
        <CardPetId>
          {firstCardActive ? (
            <CardDetailsLeftActive onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <HeaderText>
                Microchip
              </HeaderText>
              <HeaderSubText>
                Quaerat sodales sapien euismod purus blandit a purus ipsum primis Quaerat sodales sapien euismod purus blandit a purus ipsum primis Quaerat sodales sapien euismod purus blandit
              </HeaderSubText>
            </CardDetailsLeftActive>
          ) : (
            <CardDetailsLeft onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <ScannerIcon />
              <HeaderText>
                Microchip
              </HeaderText>
            </CardDetailsLeft>
          )}
          {secondCardActive ? (
            <CardDetailsRightActive onMouseEnter={handleMouseEnterSecond}
              onMouseLeave={handleMouseLeaveSecond}>
              <HeaderText>
                Passaporto
              </HeaderText>
              <HeaderSubText>
                Quaerat sodales sapien euismod purus blandit a purus ipsum primis Quaerat sodales sapien euismod purus blandit a purus ipsum primis Quaerat sodales sapien euismod purus blandit
              </HeaderSubText>
            </CardDetailsRightActive>
          ) : (
            <CardDetailsRight
              onMouseEnter={handleMouseEnterSecond}
              onMouseLeave={handleMouseLeaveSecond}
            >
              <PlaneIcon />
              <HeaderText>
                Passaporto
              </HeaderText>
            </CardDetailsRight>
          )}
        </CardPetId>
      </TitleContainer>
    </div>
  )
}

export default CartPetId
