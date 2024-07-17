import styled from 'styled-components';

export const Title = styled.p`
  color: #343434;
  font-size: 32px;
  font-weight: 800;
`;

export const SubTitle = styled.p`
  color: #343434;
  font-size: 24px;
  font-weight: 600;
`;

export const ListContent = styled.p`
  color: #343434;
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Circular = styled.div`
  border-radius: 50%;
  border: 4px solid #007E60;
  width: 22px;
  height: 22px;
`;

export const SmallGraceStyle = {
  position: 'absolute',
  left: '-8%',
  bottom: '-30px',
};