import styled from 'styled-components';

const Wrapper = styled.div`
  transition: opacity 150ms ease;
  opacity: ${({ animated }) => animated ? 1 : 0};
`;

export default Wrapper;
