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
  gap: 175px;
  width: 100%;
  height: 280px;
  position: relative;
`;

export const CardDetailsLeft = styled.div`
  background-color: #FCB300;
  border-radius: 65px;  
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  cursor: pointer;
  flex-direction: column;
  border: 5px solid #CC7E09;
  z-index: 2;
`;

export const CardDetailsRight = styled.div`
  background-color: #A00483;
  border-radius: 65px;
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  cursor: pointer;
  border: 5px solid #74005E;
  z-index: 2;
`;

export const CardDetailsThird = styled.div`
  background-color: #00B388;
  border-radius: 65px;
  display: flex;
  width: 50%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px;
  cursor: pointer;
  border: 5px solid #007E60;
  z-index: 2;
  gap: 10px;
`;

export const CardDetailsLeftActive = styled.div`
  background-color: #FCB300;
  border-radius: 65px;  
  display: flex;
  width: 50%;
  align-items: flex-start;
  flex-direction: column;  
  padding: 30px;
  cursor: pointer;
  border: 5px solid #CC7E09;
  z-index: 2;
  gap: 10px;
`;

export const CardDetailsRightActive = styled.div`
  background-color: #A00483;
  border-radius: 65px;
  display: flex;
  width: 50%;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  cursor: pointer;
  border: 5px solid #74005E;
  z-index: 2;
  gap: 10px;
`;

export const CardDetailsThirdActive = styled.div`
  background-color: #00B388;
  border-radius: 65px;
  display: flex;
  width: 50%;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px;
  cursor: pointer;
  border: 5px solid #007E60;
  z-index: 2;
`;

export const HeaderText = styled.div`
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
`;

export const HeaderSubText = styled.div`
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
`;

export const SmallGraceStyle = {
  position: 'absolute',
  top: '0px',
  left: '50%',
};