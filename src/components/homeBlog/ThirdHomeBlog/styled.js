import styled from 'styled-components';

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 100%;
  z-index: 10;
  padding-top: 40px;
   align-items: center;

  @media (min-width: 800px) {
    margin: 0 auto 0;
  }

  @media (max-width: 799px) {
    padding: 50px 36px;
  }
`;

export const Container = styled.div`
 max-width: 100%;
 margin-left: 75px;
 margin-right: 75px;
 display: flex;
   gap: 40px;

 `;

export const StartComponents = styled.div`
  display: flex;
  width: 568px;
 `;

export const SideBarTitle = styled.h5`
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
 `;

export const SideBarTitleUl = styled.ul`
   grid-column: span 2;
 `;
export const SideBarTitleLi = styled.li`
  ist-style-type: none;
 `;
export const SideBarTitleA = styled.a`
  font-size: 20px;
  font-weight: 600;
  text-decoration-line: none;
  color:#000;
  line-height: 54px;
 `;

export const ColRightSide = styled.div`
 grid-column: span 3 / span 3;
 font-weight: bold; 
 padding: 32px;
 border: 5px solid #007E60;
 border-radius: 35px;
 background-color: rgb(255, 255, 255);
 width: fit-content;
 gap: 10px;
  @media (max-width: 1441px) {
    width: 895px
  }
`;

export const Card1 = styled.div`
  overflow: hidden !important;
  display: inline-block !important;
  weight:500px !important;
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
`;
export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
  // justify-content: space-between;
  gap: 12px;
`;
export const CardMainTitle = styled.h2`
  font-size: 26px;
  font-weight: 800;
  line-height: 34px;
  color: #343434;
  font-family: nunito;
`;
export const CardSubTitle = styled.div`
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  color: #343434;
  font-family: nunito;
  margin-top: 10px;
`;
export const CardSubName = styled.p`
  font-size: 20px;
  color: #000000;
  weight: 600px;
`;
