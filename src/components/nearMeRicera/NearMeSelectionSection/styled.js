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
  display: flex;
  flex-direction: column;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 45px;
  border: 5px solid #001A75;
  overflow: hidden;
  background-color: #0017E5;
`

export const CardHeader = styled.div`
  padding: 22px 25px 22px 30px;
  `
  export const CardTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  `  
  
export const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px 25px 22px 30px;
  border-top: 5px solid #001A75;
  gap: 5px;
`

export const CardDetailsTitle = styled.h1`
  color: #343434;
  font-size: 20px;
  font-weight: 800;
`

export const CardDetailsDesc = styled.h2`
  color: #343434;
  font-size: 16px;
  font-weight: 700;
`

export const CardRated = styled.div`
  display: flex;
  gap: 2px;
`

export const LocationDetailsText = styled.p`
  color: #343434;
  font-size: 14px;
  font-weight: 600;
`

export const ClockDetailsText = styled.p`
  color: #343434;
  font-size: 14px;
  font-weight: 600;
`