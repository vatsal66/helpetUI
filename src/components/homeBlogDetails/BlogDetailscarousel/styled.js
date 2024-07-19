import styled from 'styled-components';

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleCarousel = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #343434;
  width: 80%;
  margin: 0 auto;
`;

export const CarouselContainer = styled.div`
  width: calc(80% + 36px);
  margin: 0 auto;
`;

export const CarouselCard = styled.div`
  background-color: #ffffff;
  border: 5px solid #007E60;
  border-radius: 40px;  
  width: 100%;
  padding: 20px 20px 30px 20px;
  display: flex!important;
  height: 100%;
  flex-direction: column;
  gap: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
`;

export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CardSubName = styled.p`
  font-size: 20px;
  color: #000000;
  weight: 600px;
`;

export const TitleRight = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #343434;
`;

export const CardSubTitle = styled.p`
  font-size: 14px;
  color: #343434;
  weight: 600px;
`;

export const svgStyle = {
  width: '18px',
  height: '18px',
};