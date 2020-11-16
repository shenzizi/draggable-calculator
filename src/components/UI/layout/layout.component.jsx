import styled from 'styled-components/macro';

export const Layout = styled.div`
  text-align: center;
  margin: auto;
	display: flex;
  justify-content: center;
  align-items: center; 
  height: 100vh;
  @media screen and (min-width:${props => props.theme.size.pcBreakpoint}) {
    min-height: -webkit-fill-available;
  }
`;
