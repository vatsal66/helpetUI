import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  max-width: 200px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 20px;
  font-size: 28px;
`;

export const Description = styled.h3`
  color: ${({ theme }) => theme.colors.subtitle};
  font-weight: 600;
  opacity: 0.53;
  text-align: center;
  font-size: 16px;
`;
