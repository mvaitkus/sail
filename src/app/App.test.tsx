import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const menuItemWind = screen.getByText(/Wind/i);
  const menuItemMySails = screen.getByText(/My Sails/i);
  const menuItemSettings = screen.getByText(/Settings/i);
  expect(menuItemWind).toBeInTheDocument();
  expect(menuItemMySails).toBeInTheDocument();
  expect(menuItemSettings).toBeInTheDocument();
});
