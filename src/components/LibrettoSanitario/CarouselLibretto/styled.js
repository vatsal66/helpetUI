import styled from 'styled-components';

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #C54EAE;
  border: 5px solid #74005E;
  border-radius: 65px;  
  width: 100%;
  padding: 0 50px;
  height: 518px;
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

export const CarouselCardCenter = styled.div`
  width: 86%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
`;

export const InsideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 40px;
  align-items: flex-start;
  justify-content: space-around;
`;

export const InsideLeftTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
  margin-left: auto;
  width: 90%;
`;

export const UpperSide = styled.div`
  display: flex;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid #74005E;
  width: 53px;
  height: 53px;
  align-items: center;
  justify-content: center;
`;

export const CenterSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderText = styled.div`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  line-height: 35px;
`;

export const HeaderSubText = styled.div`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
`;

export const InsideRight = styled.div`
  display: flex;
  width: 40%;
  align-items: flex-end;
`;

export const SmallGraceStyle = {
  position: 'absolute',
  top: 0,
  right: '21%',
}