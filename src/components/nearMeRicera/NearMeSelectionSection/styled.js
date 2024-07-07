import styled from 'styled-components'

export const Title = styled.h1`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  line-height: 38.19px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`;
export const Subtitle = styled.h2`
  color: #343434;
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  padding: 0 125px 0 0;
  @media (max-width: 799px) {
    font-size: 16px;
  }
`;

export const CardSection = styled.div`
  disply: flex;
  flex-direction: column;
`

export const Card = styled.div`
  disply: flex;
  flex-direction: column;
  border-radius: 45px;
  border: 5px solid #001A75;
  overflow: hidden;
`

export const CardHeader = styled.div`
  border-bottom: 5px solid #001A75;
  background-color: #0017E5;
`
export const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`  

export const CardDetails = styled.div`
  background-color: #ffffff;
`