import { render, screen } from '@testing-library/react';
import React from 'react';

import Layout from '.';

test('renders learn react link', () => {
  render(<Layout />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
