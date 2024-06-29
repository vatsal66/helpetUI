import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 25px;
  padding: 30px 35px;
  min-height: 280px;
  max-width: 350px;
  z-index: 100;

  transition: transform 150ms ease;
  transform: ${({ animated }) => (animated ? 'scale(1)' : 'scale(0)')};

  & > * + * {
    margin-top: 10px;
  }

  @media (max-width: 374px) {
    max-width: 300px;
  }
`;

export const TypeText = styled.p`
  font-size: 1em;
  color: ${({ theme }) => theme.colors.description};
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -2px;
  line-height: 1;
  text-align: center;
`;

export const Description = styled.h3`
  color: ${({ theme }) => theme.colors.description};
  text-align: center;
  font-size: 1.2em;
  font-weight: normal;
`;
