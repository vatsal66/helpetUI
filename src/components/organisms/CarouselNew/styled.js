import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const SliderContainer = styled.div`
  margin: 0 10%;
`;

export const NavContainer = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  margin: 0 2%;
  position: relative;
  top: 250px;
}
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
  border-radius: 30px;
  color: #343434;
  font-size: 20px;
  margin: 0 auto;
  padding: 28px 44px;
  position: relative;
  text-align: center;
  max-width: 95%;
  z-index: 10;
  font-weight: 600;

  @media (max-width: 799px) {
    font-size: 16px;
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
  font-size: 28px;
  color: #000000;
  font-weight: 800;
  text-transform: uppercase;
`;
