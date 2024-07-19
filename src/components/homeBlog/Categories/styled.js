import styled from 'styled-components';

export const SideBarTitle = styled.h5`
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
 `;

export const SideBarTitleListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SideBarTitleLi = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #000;
  cursor: pointer;
  background: ${({ active }) => (active ? "#B5EBDB" : "none")};
  border: ${({ active }) => (active ? "3px solid #064641" : "none")};
  border-radius: 12px;
  width: fit-content;
  padding: 0 12px
`;
