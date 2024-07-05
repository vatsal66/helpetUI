import React, { useState } from 'react'
import {
  Subtitle,
  Title,
  TitleContainer,
  CardPetId,
  CardDetailsLeft,
  CardDetailsRight,
  CardDetailsLeftActive,
  CardDetailsRightActive,
  HeaderText,
  HeaderSubText,
  CardDetailsThirdActive,
  CardDetailsThird,
  SmallGraceStyle,
} from './styled'
import Card1Icon from '@assets/images/Librettosanitario/Card1Icon.svg'
import Card2Icon from '@assets/images/Librettosanitario/Card2Icon.svg'
import Card3Icon from '@assets/images/Librettosanitario/Card3Icon.svg'
import CardLibrettoRoad from '@assets/images/Librettosanitario/CardLibrettoRoad.png'
import SmallGrace from '@assets/images/common/smallGrace.svg';

const CardLibretto = () => {
  const [firstCardActive, setFirstCardActive] = useState(false)
  const [secondCardActive, setSecondCardActive] = useState(false)
  const [thirdCardActive, setThirdCardActive] = useState(false)

  const handleMouseEnter = () => {
    setFirstCardActive(true)
  }

  const handleMouseLeave = () => {
    setFirstCardActive(false)
  }

  const handleMouseEnterSecond = () => {
    setSecondCardActive(true)
  }

  const handleMouseLeaveSecond = () => {
    setSecondCardActive(false)
  }

  const handleMouseEnterThird = () => {
    setThirdCardActive(true)
  }

  const handleMouseLeaveThird = () => {
    setThirdCardActive(false)
  }

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        paddingTop: '50px',
      }}
    >
      <TitleContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            position: 'relative',
          }}
        >
          <SmallGrace style={SmallGraceStyle} />
          <Title>Vantaggi</Title>
          <Subtitle>
            Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit a purus 
          </Subtitle>
        </div>
        <CardPetId>
          {firstCardActive ? (
            <CardDetailsLeftActive
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <HeaderText>Praticità</HeaderText>
              <HeaderSubText>
              Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus purus blandit a purus 
              </HeaderSubText>
            </CardDetailsLeftActive>
          ) : (
            <CardDetailsLeft
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Card1Icon />
              <HeaderText>Praticità</HeaderText>
            </CardDetailsLeft>
          )}

          {secondCardActive ? (
            <CardDetailsRightActive
              onMouseEnter={handleMouseEnterSecond}
              onMouseLeave={handleMouseLeaveSecond}
            >
              <HeaderText>Monitoraggio</HeaderText>
              <HeaderSubText>
              Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sodales sapien euismod
              </HeaderSubText>
            </CardDetailsRightActive>
          ) : (
            <CardDetailsRight
              onMouseEnter={handleMouseEnterSecond}
              onMouseLeave={handleMouseLeaveSecond}
            >
              <Card2Icon />
              <HeaderText>Monitoraggio</HeaderText>
            </CardDetailsRight>
          )}

          {thirdCardActive ? (
            <CardDetailsThirdActive
              onMouseEnter={handleMouseEnterThird}
              onMouseLeave={handleMouseLeaveThird}
            >
              <HeaderText>Connessione</HeaderText>
              <HeaderSubText>
              Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sodales sapien euismod
              </HeaderSubText>
            </CardDetailsThirdActive>
          ) : (
            <CardDetailsThird
              onMouseEnter={handleMouseEnterThird}
              onMouseLeave={handleMouseLeaveThird}
            >
              <Card3Icon />
              <HeaderText>Connessione</HeaderText>
            </CardDetailsThird>
          )}
          <img src={CardLibrettoRoad} alt="" style={{ position: 'absolute', left: '-20%', top: 'calc(50% - 34px)', zIndex: 1 }} />
        </CardPetId>
      </TitleContainer>
    </div>
  )
}

export default CardLibretto
