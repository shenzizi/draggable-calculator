import styled from 'styled-components/macro';

export const Calculator = styled.div`
  background-image: ${props => props.theme.color.background};
  display: ${props => props.show ? 'flex' : 'none'};
  width: ${props => props.theme.size.calculatorWidth}px;
  height: ${props => props.theme.size.calculatorHeight}px;
  position: absolute;
  z-index: 999;
  flex-flow: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 10px 20px;
  cursor: pointer;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  @media screen and (max-width:${props => props.theme.size.pcBreakpoint}) {
    width: 360px;
  }
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    width: 100vw;
    position: fixed;
    top: 50%;
    left: 0;
    bottom: 0;
    align-items: center;
  }
`;