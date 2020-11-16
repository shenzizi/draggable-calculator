import React from 'react';
import { Button } from '../UI';
import styled from 'styled-components/macro';

const Instruction = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  color: ${props => props.theme.color.primary};
  position: absolute;
  z-index: 1;
  ul {
    text-align: left;
    li {
      margin: 10px;
    }
  }
`;

const Intro = ({ show, handleCalculatorClick }) => {
  return (
    <Instruction show={!show}>
      <Button onClick={handleCalculatorClick}>
        CLICK ME!
    </Button>
      <ul>
        <li>You can click the button to get the calculator</li>
        <li>You can drag and drop the calculator</li>
        <li>You can hide the calculator by clicking outside of it</li>
      </ul>
    </Instruction>
  )
};

export default React.memo(Intro);