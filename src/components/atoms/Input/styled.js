import styled, { css } from 'styled-components';
import InputWithMask from 'react-input-mask';

export const StyledInput = styled(InputWithMask)`
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.fill};
  font-size: 16px;
  font-family: Nunito;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.description};
  }

  ${({ error, theme }) =>
    error &&
    css`
      border-color: ${theme.colors.error};

      &::placeholder {
        color: ${theme.colors.error};
      }
    `};
`;
