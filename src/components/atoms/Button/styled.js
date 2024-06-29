import styled from 'styled-components';

import { spreadSizes } from '@helpers/styles';

export const StyledButton = styled.button`
  cursor: pointer;
  padding: ${({ padding }) => (padding ? spreadSizes(padding) : '6px 12px')};
  border-radius: ${({ round }) => (round ? 25 : 0)}px;
  background-color: ${({ theme, backgroundColor }) =>
    backgroundColor ?? theme.colors.primary};
  color: ${({ theme, color }) => color ?? theme.colors.white};
  border: 0;
  outline: 0;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: not-allowed;
  }
`;
