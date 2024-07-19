import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  position: relative;
`;

export const MainCard = styled.div`
  border-radius: 35px;
  display: flex;
  padding: 32px 50px 32px 32px;
  border: 5px solid #007E60;
  gap: 30px;
`;

export const LeftCardSide = styled.div`
  width: 33%;
  position: relative;
`;

export const ColRightSide = styled.div`
  width: 66%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Card1 = styled.div`
  overflow: hidden !important;
  display: inline-block !important;
  weight:500px !important;
`;

export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`;

export const CardMainTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
  color: #343434;
`;

export const CardSubTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  color: #343434;
`;

export const CardSubName = styled.p`
  font-size: 20px;
  color: #000000;
  weight: 600px !important;
`;

export const SmallGraceStyle= {
  position: 'absolute',
  left: '-7%',
  top: '200px',
};

export const DetailButton = styled.button`
  position: absolute;
  left: 24px;
  bottom: 24px;
  border: 5px solid #A00483;
  background: #C54EAE;
  border-radius: 25px;
  padding: 11px 16px;
  font-size: 20px;
  font-weight: 800;
  color: #ffffff;
`;