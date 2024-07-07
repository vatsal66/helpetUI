import styled from 'styled-components';

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 35px;

  @media (max-width: 799px) {
    padding: 0 16px;
    max-width: 100%;

    > svg {
      margin-top: 32px;
      width: 140px;
    }
  }
`;

export const Title = styled.h1`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.19px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`;
export const Subtitle = styled.h2`
  color: #343434;
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  padding: 0 125px 0 0;
  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const CardPetId = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
  height: 215px;
`;

export const CardDetailsLeft = styled.div`
  background-color: #A00483;
  border-radius: 65px;  
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
  padding: 30px 50px;
  cursor: pointer;
`;

export const CardDetailsRight = styled.div`
  background-color: #F76908;
  border-radius: 65px;
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: space-around;
  padding: 30px 50px;
  cursor: pointer;
`;

export const CardDetailsLeftActive = styled.div`
  background-color: #A00483;
  border-radius: 65px;  
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  padding: 30px 50px;
  cursor: pointer;
  `;

export const CardDetailsRightActive = styled.div`
  background-color: #F76908;
  border-radius: 65px;
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  padding: 30px 50px;
  cursor: pointer;
`;

export const HeaderText = styled.div`
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
`;

export const HeaderSubText = styled.div`
  font-size: 20px;
  color: #ffffff;
  font-weight: medium;
`;

export const SmallGraceStyle = {
  position: 'absolute',
  top: '-21px',
  left: '35%',
}