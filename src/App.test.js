import { render, screen } from './custom-render';
import App from './App';

test('renders click me button', () => {
  render(<App />);
  const clickmeButton = screen.getByText(/click me/i);
  expect(clickmeButton).toBeInTheDocument();
});
