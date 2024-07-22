import styled from 'styled-components';

// import { ContentSection } from '@components/quarks';

export const StyledContentMainSection = styled.div`
  background-color: rgb(0, 179, 136);
  padding: 8%;
  position: relative;
`;

export const TextSection = styled.div`
  text-align: center;
`;

export const TextTitle = styled.h1`
  font-size: 28px;
`;

export const TextDescription = styled.h3`
  font-size: 20px;
  width: 60%;
  margin: auto;
`;

export const ImageGrid = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 60px;
`;

export const ImageRow = styled.div`
  display: flex;
  align-items: center;
`;

export const VerticalLine = styled.div`
  width: 3px;
  height: 100px;
  background-color: white;
  margin: 0 65px;
`;

export const HorizontalLine = styled.div`
  width: 165px;
  height: 3px;
  background-color: white; 
  margin: 10px 34px;
`;