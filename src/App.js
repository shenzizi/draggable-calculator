import {
  useState,
  useCallback
} from 'react';
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import theme from './config/theme';
import DraggableCalcutator from './components/calculator/draggableCalculator.component';
import Intro from './components/intro/intro.component';
import { Layout } from './components/UI';

const GlobalStyle = createGlobalStyle`
  html {
    font-size:62.5%;
  }
  body {
    background-color: #f3f5f7;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
  }
  * {
    box-sizing: border-box;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
`

function App() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleCalculatorClick = useCallback(() => {
    setShowCalculator(prevShow => !prevShow);
    setPosition({ x: 0, y: 0 });
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout className="App">
        <Intro
          show={showCalculator}
          handleCalculatorClick={handleCalculatorClick}
        />
        <DraggableCalcutator
          show={showCalculator}
          position={position}
          setPosition={setPosition}
          handleCalculatorClick={handleCalculatorClick}
        />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
