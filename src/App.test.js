import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should display a message', () => {
    render(<App />);
    expect(screen.getByText("Let's Code")).toBeInTheDocument();
  });
});
