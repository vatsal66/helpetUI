import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  position: relative;
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const NavContainer = styled.div`
  bottom: 20px;
  display: flex;
  height: 100px;
  justify-content: space-between;
  left: 50%;
  max-width: 100%;
  position: absolute;
  transform: translateX(-50%);
  width: 350px;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: block;
`;

export const CarouselFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.greenBackground};
  background-repeat: no-repeat;
  padding-bottom: 20px;
  position: relative;

  @media (max-width: 540px) {
    padding-bottom: 50px;
  }
`;

export const Description = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.description};
  font-size: 27px;
  margin: 0 auto;
  padding: 28px 44px;
  position: relative;
  text-align: center;
  max-width: 95%;
  width: 568px;
  z-index: 10;

  @media (max-width: 799px) {
    font-size: 22px;
  }
`;

export const GrassWrapper = styled.div`
  bottom: -63px;
  left: 47%;
  position: absolute;
  width: 1200px;
  transform: translateX(-50%);

  svg {
    max-width: 100%;
  }

  @media (max-width: 540px) {
    bottom: -100px;
    left: 0;
    position: absolute;
    transform: translateX(0);
    width: 90%;
    z-index: 100;
  }
`;

export const TypeText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.description};
  text-transform: uppercase;
`;
