import styled from 'styled-components/macro';

export const Button = styled.button`
  border: 2px solid ${props => props.theme.color.primary};
  color: ${props => props.theme.color.primary};
  font-size: ${props => props.theme.size.buttonFont};
  cursor: pointer;
  background-color: transparent;
  border-radius: 5px;
  padding: 10px;
  outline:none;
  &:hover {
    background-color: ${props => props.theme.color.primary};
    color: #fff;
  }
`;

const CalculatorButton = styled.button`
  height: ${props => props.theme.size.buttonHeight};
  width: ${props => props.theme.size.buttonWidth};
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.color.text};
  font-size: ${props => props.theme.size.buttonFont};
  border-radius: 50%;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover{
    filter: ${props => props.theme.color.hoverEffect};
  }
  &:focus {
    outline: none;
  }
`;

export const NumberButton = styled(CalculatorButton)`
  ${props => props.zero && `
    width: 108px;
    border-radius: 25px;
    text-align:left;
    padding-left:20px;
  `}
`;

export const OperatorButton = styled(CalculatorButton)`
  background-color: ${props => props.theme.color.secondary};
  &:hover{
    filter: ${props => props.theme.color.lightHoverEffect};
  }
`;

export const SpecialOperatorButton = styled(CalculatorButton)`
  background-color: ${props => props.theme.color.gray};
  &:hover{
    filter: ${props => props.theme.color.lightHoverEffect};
  }
`;


