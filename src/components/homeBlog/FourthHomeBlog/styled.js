import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
   max-width: 100%;
 margin-left: 75px;
 margin-right: 75px;
 `;

export const MainCard = styled.div`
    background-color: white;
    border-radius: 35px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    max-width: 1150px;
    display: flex;
    margin: 20px;
    padding: 36px 30px 37px 37px;
 border: 5px solid #007E60;

 `;

export const ImageWrapper = styled.div`
 position: relative;
    flex: 0 0 387px;
 `;
export const ColRightSide = styled.div`
  padding: 0 0 0 30px;
    display: flex;
    flex-direction: column;
 `;
export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    color: #888;
    font-size: 14px;
 `;

export const Card1 = styled.div`
  overflow: hidden !important;
  display: inline-block !important;
  weight:500px !important;
`;
export const CardHeaderName = styled.div`
  display: flex;
  align-items: center;
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
`;
export const CardSubName = styled.p`
  font-size: 20px;
  color: #000000;
  weight: 600px !important;
`;