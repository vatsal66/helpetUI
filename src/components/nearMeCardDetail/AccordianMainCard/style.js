import styled from 'styled-components';

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 45px;
  border: 5px solid #001A75;
  overflow: hidden;
  background-color: #0017E5;
`;

export const CardHeader = styled.div`
  padding: 22px 25px 22px 30px;
`;
export const CardTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #ffffff;
  line-height: 25px;
`;
export const CardDetails = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  border-top: 5px solid #001A75;
  gap: 58px;
  padding: 18px 0 40px 40px; 
`;

export const CardDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 55%;
`;

export const CardCenter = styled.div`
  width: 45%;
`;

export const CardDetailsRight = styled.div`
  display: flex;
  width: 30%;
  position: relative;
`;

export const CardDetailsTitle = styled.h1`
  color: #343434;
  font-size: 24px;
  font-weight: 800;
  line-height: 25px;
  `;

export const CardDetailsDesc = styled.h2`
  color: #343434;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
`;

export const CardRated = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;
`;

export const RatingText = styled.p`
  color: #343434;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  text-decoration: underline;
  margin-left: 8px;
`;

export const LocationDetailsText = styled.p`
  color: #343434;
  font-size: 14px;
  font-weight: 600;
`;

export const ClockDetailsText = styled.p`
  color: #343434;
  font-size: 14px;
  font-weight: 600;
`;

export const InlineCard = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 28px;
`;

export const doctorStyle = {
  position: 'absolute',
  borderRadius: '50%',
  border: '5px solid #001A75',
  right: '-18px',
  bottom: '-26px',
  width: '97px',
  height: '97px',
};

export const doctorBackgroundStyle = {
  borderRadius: '23px',
  height: '191px',
  width: '191px',
};