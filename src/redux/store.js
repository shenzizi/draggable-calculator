import {
  createStore,
  combineReducers
} from 'redux';
import calculateReducer from './calculation/calculation.reducer'

const rootReducer = combineReducers({
  calculator: calculateReducer
})

export default createStore(rootReducer);
