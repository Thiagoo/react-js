import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('test the home text', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
