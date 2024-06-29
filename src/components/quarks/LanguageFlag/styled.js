import styled from 'styled-components';

export const Wrapper = styled.span`
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 25px;
  width: 25px;
`;

export const SelectedCirlce = styled.span`
  position: absolute;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 100%;
`;
