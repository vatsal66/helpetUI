import styled from 'styled-components';

import { Input } from '@components/atoms';

export const Container = styled.form`
  @media (min-width: 800px) {
    display: flex;
    flex-grow: 1;
  }

  @media (max-width: 799px) {
    margin: 0 auto;
    max-width: 260px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Inline = styled.div`
  margin-bottom: 6px;
  margin-right: 20px;

  @media (max-width: 799px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const StyledInput = styled(Input)`
  padding: 14px 16px;
  width: 100%;

  @media (min-width: 800px) {
    :first-child {
      margin-right: 18px;
    }
  }

  @media (max-width: 799px) {
    margin-bottom: 12px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (max-width: 799px) {
    margin-top: 18px;
    text-align: center;
  }

  @media (min-width: 800px) and (max-width: 1199px) {
    margin-left: 18px;
  }
`;
