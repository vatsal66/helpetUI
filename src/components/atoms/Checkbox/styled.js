import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  padding-left: 35px;
  line-height: 27px;
  font-size: ${({ labelFontSize }) => labelFontSize}px;
  user-select: none;
  color: ${({ labelColor, theme }) => labelColor ?? theme.colors.white};
`;

export const StyledInput = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span {
    background-color: ${({ checkedColor }) => checkedColor};

    &:after {
      display: block;
    }
  }
`;

export const StyledSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 1px;
  position: absolute;
  height: 24px;
  width: 24px;
  background-color: ${({ uncheckedColor }) => uncheckedColor};
  border-radius: 4px;

  &:after {
    content: '';
    display: none;
    width: 4px;
    height: 8px;
    border: solid ${({ theme }) => theme.colors.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;
