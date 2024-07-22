import styled from 'styled-components';

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const StartComponents = styled.div`
  display: flex;
`;

export const TitleRight = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: #343434;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardSubName = styled.p`
  font-size: 20px;
  color: #000000;
  font-weight: 600px;
`;

export const CardSubTitle = styled.p`
  font-size: 22px;
  color: #343434;
  font-weight: 600;
  position: relative;
`;

export const LeftTItle = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 55px 0 20px 0;
`;

export const ThreeTreeStyle = {
  position: 'absolute',
  left: '-40%',
  top: '40px',
};

export const SmallGraceStyleBottom = {
  position: 'absolute',
  left: '-15%',
  top: '100px',
};

export const SmallGraceRightStyle = {
  position: 'absolute',
  right: '-8%',
  bottom: '40px',
};

export const SmallGraceLeftTopStyle = {
  position: 'absolute',
  left: '-23%',
  bottom: '-125px',
};
