import styled from 'styled-components';

export const Container = styled.div`
  height: 325px;
  overflow: hidden;
  position: relative;
  top: 2015px;
  z-index: 10;

  @media (max-width: 919px) {
    margin-top: 540px;
  }
`;

export const DoorStyle = {
  left: '50%',
  position: 'absolute',
  top: 117,
  transform: 'translateX(-50%)',
};

export const HeadStyle = {
  position: 'absolute',
  right: 155,
  top: 195,
  zIndex: 0,
};
