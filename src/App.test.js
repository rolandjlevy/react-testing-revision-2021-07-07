import React, { useState, useEffect } from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
// import axios from 'axios';
import App from './App';

const Button = ({ onClick, children }) => (
  <button 
    onClick={onClick}
  >
    {children}
  </button>
)

describe('Should render components, test existence and data', () => {
  test('renders learn react link', () => {
    render(<App />);
    screen.getByRole('link', { name: 'Learn React'});
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(
      screen.getByText(/click me/i)
    );
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
});