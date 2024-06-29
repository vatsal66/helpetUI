import styled from 'styled-components';

export const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  > div {
    width: 100%;
  }
`;

export const TagWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  bottom: -130px;
  height: 100px;
  position: absolute;

  > span {
    bottom: -38px;
    position: relative;
  }
`;
