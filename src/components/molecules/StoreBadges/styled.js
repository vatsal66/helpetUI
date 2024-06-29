import styled from 'styled-components';

export const BadgesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > * + * {
    margin-left: 6px;
  }
`;
