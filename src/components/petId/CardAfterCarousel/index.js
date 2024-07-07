import React, { useState } from 'react'
import { 
  Subtitle, Title, TitleContainer,
  CardPetId, CardDetailsLeft, CardDetailsRight,
  CardDetailsLeftActive, CardDetailsRightActive,
  HeaderText, HeaderSubText,
  CardDetailsThirdActive, CardDetailsThird,
  SmallGraceStyle, TreeStyle
} from './styled'

import Card1Icon from '@assets/images/PetId/Card1Icon.svg'
import Card2Icon from '@assets/images/PetId/Card2Icon.svg'
import Card3Icon from '@assets/images/PetId/Card3Icon.svg'
import SmallGrace from '@assets/images/common/smallGrace.svg';
import Tree from '@assets/images/common/Tree.svg';

const CardAfterCarousel = () => {
  const [firstCardActive, setFirstCardActive] = useState(false);
  const [secondCardActive, setSecondCardActive] = useState(false);
  const [thirdCardActive, setThirdCardActive] = useState(false);

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

  const handleMouseEnterThird = () => {
    setThirdCardActive(true);
  };

  const handleMouseLeaveThird = () => {
    setThirdCardActive(false);
  };


  return (
    <div style={{
      width: '80%',
      margin: '0 auto',
      paddingTop: '75px'
    }}>
      <TitleContainer>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          position: 'relative'
        }}>
          <Tree style={TreeStyle} />
          <SmallGrace style={SmallGraceStyle} />
          <Title>Vantaggi</Title>
          <Subtitle>Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus sapien euismod purus blandit a purus blandit a purus sapien euismod purus blandit
            a purus</Subtitle>
        </div>
        <CardPetId>
          {!firstCardActive ? (
            <CardDetailsLeftActive onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <HeaderText>
                Sicurezza
              </HeaderText>
              <HeaderSubText>
                Quaerat sodales sapien euismod purus blandit a purus ipsum primis sodales sapien euismod purus blandit a purus purus blandit a purus
              </HeaderSubText>
            </CardDetailsLeftActive>
          ) : (
            <CardDetailsLeft onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Card1Icon />
              <HeaderText>
                Sicurezza
              </HeaderText>
            </CardDetailsLeft>
          )}

          {!secondCardActive ? (
            <CardDetailsRightActive onMouseEnter={handleMouseEnterSecond}
              onMouseLeave={handleMouseLeaveSecond}>
              <HeaderText>
                Organizzazione
              </HeaderText>
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
              <HeaderText>
                Organizzazione
              </HeaderText>
            </CardDetailsRight>
          )}

          {!thirdCardActive
            ? (
              <CardDetailsThirdActive onMouseEnter={handleMouseEnterThird}
                onMouseLeave={handleMouseLeaveThird}>
                <HeaderText>
                  Comodità
                </HeaderText>
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
                <HeaderText>
                  Comodità
                </HeaderText>
              </CardDetailsThird>
            )}
        </CardPetId>
      </TitleContainer>
    </div>
  )
}

export default CardAfterCarousel
