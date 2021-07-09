import React, { useState, useEffect } from 'react';
import { render, waitFor, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

// import axios from 'axios';
import App from './App';
import Button from './components/Button';

describe('Should render components, test existence and data', () => {
  
  test('renders learn react link', () => {
    render(<App />);
    screen.getByRole('link', { name: 'Learn React'});
    const btn = screen.getByRole('button', { name: 'clicker'});
    userEvent.click(btn);
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