import styled from 'styled-components';

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

export const StartComponents = styled.div`
  display: flex;
`;

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
`;

export const ColRightSide = styled.div`
  font-weight: bold; 
  padding: 30px;
  border: 5px solid #007E60;
  border-radius: 40px;
  background-color: rgb(255, 255, 255);
  width: 100%;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 30px 0 25px 0;
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
