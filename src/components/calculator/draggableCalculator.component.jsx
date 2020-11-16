import React, {
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react';
import { useDispatch } from 'react-redux';
import {
  setExpression,
  evaluateExpression,
  clearExpression
} from '../../redux/calculation/calculation.actions';
import Screen from './screen.component';
import Keypad from './keypad.component';
import {
  Calculator,
  Overlay,
  Wrapper
} from '../UI';
import theme from '../../config/theme';

const DraggableCalculator = ({ show, position, setPosition, handleCalculatorClick }) => {
  const dispatch = useDispatch();
  const [pressed, setPressed] = useState(false);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  const handleExpressClick = useCallback(keyValue => dispatch(setExpression(keyValue)), [dispatch]);

  const handleReset = useCallback(() => dispatch(clearExpression()), [dispatch]);

  const handleEvaluation = useCallback(() => dispatch(evaluateExpression()), [dispatch]);

  const onMouseMove = (event) => {
    const { calculatorWidth, calculatorHeight } = theme.size;
    if (pressed) {
      if (Math.abs(position.x + event.movementX) + calculatorWidth <= window.innerWidth &&
        Math.abs(position.y + event.movementY) + calculatorHeight <= window.innerHeight) {
        setPosition({
          x: position.x + event.movementX,
          y: position.y + event.movementY
        })
      }
    }
  }

  return (
    <>
      <Overlay
        show={show}
        onClick={handleCalculatorClick}
      />
      <Calculator
        show={show}
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
      >
        <Wrapper>
          <Screen />
          <Keypad
            handleReset={handleReset}
            handleExpressClick={handleExpressClick}
            handleEvaluation={handleEvaluation}
          />
        </Wrapper>
      </Calculator>
    </>
  )
}

export default DraggableCalculator;