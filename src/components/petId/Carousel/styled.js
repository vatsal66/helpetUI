import styled from 'styled-components';

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FCC80F;
  border: 5px solid #C17400;
  border-radius: 65px;  
  width: 100%;
  padding: 0 50px;
  height: 518px;
`;

export const CarouselCardLeft = styled.div`
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CarouselCardCenter = styled.div`
  width: 86%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InsideLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 40px
`;

export const UpperSide = styled.div`
  display: flex;
  border-radius: 50%;
  background: #ffffff;
  border: 4px solid #C17400;
  width: 53px;
  height: 53px;
  align-items: center;
  justify-content: center;
`;

export const CenterSide = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderText = styled.div`
  color: #C17400;
  font-side: 28px;
  font-weight: extra-bold;
`;
  
  export const HeaderSubText = styled.div`
  color: #C17400;
`;

export const BottomSide = styled.div`
  display: flex;
`;

export const InsideRight = styled.div`
  display: flex;
  width: 40%;
`;

export const CarouselCardRight = styled.div`
  width: 7%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
