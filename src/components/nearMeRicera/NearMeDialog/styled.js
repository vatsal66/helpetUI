import styled from 'styled-components'

export const closeIconStyle = {
  position: 'absolute',
  right: '20px',
  top: '20px'
}

export const Title = styled.h1`
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  margin-bottom: 30px;

  @media (max-width: 799px) {
    font-size: 26px;
  }
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-right: 30px
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  border: 4px solid #001A75;
  overflow: hidden;
  background-color: #0017E5;
`

export const CardHeader = styled.div`
  padding: 0 25px 0 30px;
`

export const CardTitle = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  line-height: 35px;
`
export const CardDetails = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  border-top: 4px solid #001A75;
`

export const CardDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 25px 22px 30px;
  width: 72%;
`
export const CardDetailsRight = styled.div`
  display: flex;
  width: 28%;
  position: relative;
`

export const CardDetailsTitle = styled.h1`
  color: #343434;
  font-size: 14px;
  font-weight: 800;
  line-height: 35px;
`

export const CardDetailsDesc = styled.h2`
  color: #343434;
  font-size: 12px;
  font-weight: 700;
  line-height: 35px;
`

export const CardRated = styled.div`
  display: flex;
  gap: 2px;
`

export const InlineCard = styled.p`
  color: #ffffff;
  font-size: 8px;
  font-weight: 700;
  line-height: 22px;
`

export const doctorBackgroundStyle = {
  borderRadius: '23px',
  height: '89px',
  width: '89px',
}

export const doctorStyle = {
  position: 'absolute',
  borderRadius: '50%',
  border: '2px solid #001A75',
  right: '-4px',
  bottom: '0',
  height: '34px',
  width: '34px',
}