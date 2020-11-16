import {
  SET_EXPRESSION,
  CLEAR_EXPRESSION,
  EVALUATE_EXPRESSION
} from './calculation.types';
import calculate from '../../utils/calculate';

let initialState = {
  expression: '',
  result: 0
}

const checkResult = (payload, expression, result) => {
  if (["+", "/", "*", "-"].includes(payload) && !expression) {
    return `${result}${payload}`;
  }
  return `${!expression && result ? result : ""}${expression + payload}`;
}

const calculateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPRESSION:
      return {
        ...state,
        expression: '',
        result: checkResult(action.payload, state.expression, state.result)
      }
    case EVALUATE_EXPRESSION:
      return {
        ...state,
        expression: `${state.result}=`,
        result: calculate(state.result)
      }
    case CLEAR_EXPRESSION:
      return {
        ...state,
        expression: '',
        result: 0
      }
    default:
      return state
  }
}

export default calculateReducer;