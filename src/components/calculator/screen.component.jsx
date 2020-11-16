import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';

const ViewScreen = styled.div`
  display: flex;
  flex-flow: column;
  text-align: right;
  color: #fff;
`;

const Expression = styled.div`
  font-size: ${props => props.theme.size.expressionFont};
  border: none;
  height: 20px;
`;

const Result = styled.div`
  font-size: ${props => props.theme.size.resultFont};
  height: 50px;
`;

const Screen = () => {
  const { expression, result } = useSelector(state => state.calculator);
  return (
    <ViewScreen>
      <Expression>
        {expression}
      </Expression>
      <Result>
        {result}
      </Result>
    </ViewScreen>
  )
}

export default React.memo(Screen);
