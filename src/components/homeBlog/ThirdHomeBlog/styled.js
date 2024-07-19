import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  gap: 38px;
  position: relative;
`;

export const StartComponents = styled.div`
  width: 50%;
`;

export const ColRightSide = styled.div`
  padding: 32px;
  border: 5px solid #007E60;
  border-radius: 35px;
  gap: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
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
  font-weight: 600;
`;

export const SmallGraceStyle = {
  position: 'absolute',
  right: '-7%',
  top: '50px',
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