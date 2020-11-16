import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    overflow: auto;
    padding: 20px;
    height: ${props => props.theme.size.mobileScrollMinHeight};
  }
`;