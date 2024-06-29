import styled from 'styled-components';

export const StyledTag = styled.span`
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 48px;
`;
