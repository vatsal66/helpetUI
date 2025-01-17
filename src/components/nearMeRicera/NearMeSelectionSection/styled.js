import styled from 'styled-components';

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

export const FilterHeader = styled.p`
  color: #000000;
  font-size: 28px;
  font-weight: 700;
  margin-top: 28px;
  `;

export const FilterTitle = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  margin: 40px 0 20px 0;
`;

export const FilterValue = styled.p`
  color: #ffffff;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
`;

export const SliderHeader = styled.p`
  color: #000000;
  font-size: 22px;
  font-weight: 700;
  margin: 30px 0 20px 0;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
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
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
`;
export const CardDetails = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 100%;
  border-top: 5px solid #001A75;
`;

export const CardDetailsLeft = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 25px 22px 30px;
  gap: 5px;
  width: 72%;
`;
export const CardDetailsRight = styled.div`
  display: flex;
  width: 28%;
  position: relative;
`;

export const CardDetailsTitle = styled.h1`
  color: #343434;
  font-size: 20px;
  font-weight: 800;
`;

export const CardDetailsDesc = styled.h2`
  color: #343434;
  font-size: 16px;
  font-weight: 700;
`;

export const CardRated = styled.div`
  display: flex;
  gap: 2px;
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
  font-size: 16px;
  font-weight: 700;
  line-height: 45px;
`;

export const doctorStyle = {
  position: 'absolute',
  borderRadius: '50%',
  border: '4px solid #001A75',
  right: '-10px',
  bottom: '-15px',
};

export const doctorBackgroundStyle = {
  borderRadius: '23px',
};

export const PaginationText = styled.p`
  color: #ffffff;
  font-size: 16px;
  line-height: 45px;
  font-weight: 700;
`;

export const LeftTruck = {
  position: 'absolute',
  top: '75px',
};

export const RightTruck = {
  right: '6%',
  position: 'absolute',
  bottom: '40%',
};

export const smallGraceStyle = {
  right: '-5%',
  position: 'absolute',
  top: '-25px',
};

export const smallGraceStyleFilte = {
  right: 0,
  position: 'absolute',
  top: '10px',
};