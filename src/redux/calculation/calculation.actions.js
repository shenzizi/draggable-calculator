import {
  SET_EXPRESSION,
  EVALUATE_EXPRESSION,
  CLEAR_EXPRESSION
} from './calculation.types';

export const setExpression = (key) => ({
  type: SET_EXPRESSION,
  payload: key
})

export const evaluateExpression = () => ({
  type: EVALUATE_EXPRESSION
})

export const clearExpression = () => ({
  type: CLEAR_EXPRESSION
})