import styled from 'styled-components';

export const Container = styled.section`
//   background-color: ${({ theme }) => theme.colors.salmon};
width: 1440px;
  // @media (min-width: 920px) {
  //   min-height: 2200px;
  // }
 
  @media (max-width: 919px) {
    min-height: 3000px;
  }
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 300px;
  left: 250px;
  max-width: 720px;
  color: red;
  font-size: 32px;

  @media (max-width: 799px) {
    max-width: 100%;
  }
`;

export const ContainerSecond = styled.section`
  background-color: pink;
  padding: 0px 100px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  
  @media (max-width: 919px) {
    min-height: 3000px; /* Set minimum height on smaller screens */
  }
`;

export const Maintitle = styled.div`
  max-width: 70%;
  // color: ${({ theme }) => theme.colors.gray};
  font-size: 30px;
  font-weight: 500;

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const TitleSecondContainer = styled.h2`
  display: flex;
`;

export const MainQuition = styled.div`
  // color: ${({ theme }) => theme.colors.gray};
  font-size: 30px;
  font-weight: 500;
  display: flex;

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;
export const Subtitle = styled.div`
  max-width: 70%;
  // color: ${({ theme }) => theme.colors.gray};
  color: red;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;
export const Vantaggi = styled.div`
  max-width: 70%;
width: 1440px;

  // color: ${({ theme }) => theme.colors.gray};
  color: red;
  font-size: 25px;
  font-weight: 500;

  @media (max-width: 799px) {
    font-size: 16px;
  }
`;
