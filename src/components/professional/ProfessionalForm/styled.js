import styled from 'styled-components';

export const Title = styled.p`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
`;

export const MiddleCard = styled.div`
  width: 100%;
  background: #C54EAE;
  border: 5px solid #A00483;
  border-radius: 35px;
  padding: 40px 50px 25px 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
`;

export const InputTile = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;
export const BorderLine = styled.div`
  border: 1px solid #ffffff;
  margin: 40px 0 25px 0
`;

export const SaveButton = styled.button`
  width: fit-content;
  padding: 12px 47px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  background: #A00483;
  border: 4px solid #74005E;
  border-radius: 10px;
`;

export const RightRoadStyle = {
  position: 'absolute',
  right: '-50%',
  bottom: '-570px',
};

export const LargeThreeTreeStyle = {
  position: 'absolute',
  left: '-30%',
  bottom: '-270px',
};

export const SmallGraceStyle = {
  position: 'absolute',
  right: '-25%',
  top: '50%',
};
