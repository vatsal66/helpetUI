import styled from 'styled-components';

import { ContentSection } from '@components/quarks';

export const StyledContentSection = styled(ContentSection)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 120px;
  padding: 0 16px;

  @media (max-width: 799px) {
    flex-direction: column;
  }
`;

export const LeftDiv = styled.div`
  max-width: 340px;

  @media (max-width: 799px) {
    margin-bottom: 36px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 16px;
`;

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.subtitle};
  opacity: 0.56;
  font-size: 16px;
  letter-spacing: 0.64px;
  text-transform: uppercase;
`;

export const Description = styled.h4`
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 16px;
`;
