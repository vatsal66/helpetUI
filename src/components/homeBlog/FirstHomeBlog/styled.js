import styled, { css, keyframes } from 'styled-components';

export const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 100%;
  z-index: 10;
  margin-top: 75px;
`;

export const Container = styled.div`
 max-width: 100%;
 margin-left: 75px;
 margin-right: 75px;
 `;
export const StartComponents = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  Col-span-1 {
   grid-column: span 2;
  }

  Col-span-1 h5{
  font-size: 28px;
  font-weight: 700;
  line-height: 30px;
  }

 Col-span-1 ul li {
  list-style-type: none;
  }

  Col-span-1 ul li a{
  font-size: 20px;
  font-weight: 600;
  text-decoration-line: none;
  color:#000;
  line-height: 54px;
  }

  Col-span-3 {
  grid-column: span 3 / span 3;
  weight: full;
  padding: 32px;
  border:2px soild ;
  border-radius: 35px;
  background-color: rgb(255 255 255);
  }

  Col-span-3 card1 {
    overflow: hidden !important;
    display: inline-block !important;
    weight:500px !important;
}

   Col-span-3 card1 img{
    border-radius: 35px ;
    height: auto;
    weight: auto;
  }

   Col-span-3 div{
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 12px;
   }

  col-span-3 h2{
  font-size: 26px;
  font-weight: 800;
  line-height: 34px;
  }

  col-span-3 p{
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  }
 `;
