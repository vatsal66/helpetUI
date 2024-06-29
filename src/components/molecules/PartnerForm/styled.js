import styled from 'styled-components';

import { Input, Button } from '@components/atoms';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  max-width: 460px;
  padding: 24px;
  min-height: 480px;
  border-radius: 10px;

  @media (min-width: 800px) and (max-width: 860px) {
    margin-left: 16px;
  }
`;

export const Inline = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled(Input)`
  width: ${({ inline }) => (inline ? 48 : 100)}%;
`;

export const StyledButton = styled(Button)`
  font-size: 18px;
  padding: 16px 48px;
`;
