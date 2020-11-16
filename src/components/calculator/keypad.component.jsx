import React from 'react';
import styled from 'styled-components/macro';
import {
  NumberButton,
  OperatorButton,
  SpecialOperatorButton
} from '../UI';
import keypad from '../../config/keypad';

const Keyboard = styled.div`
  display: flex;
  flex-flow: column;
  div {
    button {
      margin: 4px;
    }
  }
  @media screen and (max-width:${props => props.theme.size.mobileBreakpoint}) {
    width: 100%;
    overflow: auto;
  }
`;

const Keypad = ({ handleReset, handleExpressClick, handleEvaluation }) => {
  const handleClick = (keyBoardKey) => {
    switch (keyBoardKey.func) {
      case 'reset':
        return handleReset();
      case 'evaluate':
        return handleEvaluation();
      default:
        return handleExpressClick(keyBoardKey.value);
    }
  }

  return (
    <Keyboard>
      {keypad.map((keyRows, idx) => (
        <div key={idx}>
          {keyRows.map(keyBoardKey => {
            if (keyBoardKey.type === 'operator') {
              return <OperatorButton
                key={keyBoardKey.name}
                onClick={() => handleClick(keyBoardKey)}
              >
                {keyBoardKey.name}
              </OperatorButton>
            } else if (keyBoardKey.type === 'specialOperator') {
              return <SpecialOperatorButton
                key={keyBoardKey.name}
                onClick={() => handleClick(keyBoardKey)}
              >
                {keyBoardKey.name}
              </SpecialOperatorButton>
            } else {
              return <NumberButton
                key={keyBoardKey.name}
                onClick={() => handleClick(keyBoardKey)}
                {...keyBoardKey.option}>
                {keyBoardKey.name}
              </NumberButton>
            }
          }
          )}
        </div>
      ))}
    </Keyboard>
  )
}

export default React.memo(Keypad);
