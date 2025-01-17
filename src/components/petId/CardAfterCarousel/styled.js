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
  gap: 145px;
  width: 100%;
  height: 280px;
`;

export const CardDetailsLeft = styled.div`
  background-color: #FCB300;
  border-radius: 65px;  
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #CC7E09 ;
`;

export const CardDetailsRight = styled.div`
  background-color: #A00483;
  border-radius: 65px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #74005E ;
`;

export const CardDetailsThird = styled.div`
  background-color: #00B388;
  border-radius: 65px;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #007E60 ;
`;

export const CardDetailsLeftActive = styled.div`
  background-color: #FCB300;
  border-radius: 65px;  
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;  
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #CC7E09 ;
  `;

export const CardDetailsRightActive = styled.div`
  background-color: #A00483;
  border-radius: 65px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #74005E ;
`;

export const CardDetailsThirdActive = styled.div`
  background-color: #00B388;
  border-radius: 65px;
  display: flex;
  width: 100%;
  align-items: flex-start;
  flex-direction: column;
  padding: 30px 50px;
  cursor: pointer;
  border: 5px solid #007E60 ;
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
  top: '-45px',
  left: '20%',
};

export const TreeStyle = {
  position: 'absolute',
  top: '-50px',
  right: '-7%',
};
