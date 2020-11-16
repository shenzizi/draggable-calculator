import styled from 'styled-components/macro';

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: transparent;
  display: ${props => props.show ? 'block' : 'none'};
`;