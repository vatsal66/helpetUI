import styled from 'styled-components';

export const Title = styled.p`
  color: #000000;
  font-size: 32px;
  font-weight: 800;
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
  z-index: 2;
  gap: 24px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const InputTile = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
`;

export const SaveButton = styled.button`
  width: fit-content;
  padding: 6px 11px;
  font-size: 15px;
  font-weight: 700;
  color: #ffffff;
  background: #A00483;
  border: 4px solid #74005E;
  border-radius: 14px;
  cursor: pointer;
`;

export const RightImageHomeStyle = {
  position: 'absolute',
  bottom: '100px',
  right: '-20%',
};
