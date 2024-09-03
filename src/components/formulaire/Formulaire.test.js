import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Formulaire from './formulaire';
import emailjs from '@emailjs/browser';

// Mocking emailjs to prevent actual API calls during testing
jest.mock('@emailjs/browser', () => ({
  send: jest.fn().mockResolvedValue({ status: 200, text: 'OK' }),
}));

describe('Formulaire Component', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clears mock calls between tests
  });

  test('renders all form elements correctly', () => {
    render(<Formulaire />);

    // Verify that all input fields are rendered
    expect(screen.getByTestId('first-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('last-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('phone-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('message-input')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  test('handles input changes correctly', () => {
    render(<Formulaire />);

    // Simulate user typing into the input fields
    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('phone-input'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Hello, this is a test message.' } });

    // Check if the input values were updated correctly
    expect(screen.getByTestId('first-name-input').value).toBe('John');
    expect(screen.getByTestId('last-name-input').value).toBe('Doe');
    expect(screen.getByTestId('phone-input').value).toBe('1234567890');
    expect(screen.getByTestId('email-input').value).toBe('john.doe@example.com');
    expect(screen.getByTestId('message-input').value).toBe('Hello, this is a test message.');
  });

  test('submits the form correctly', async () => {
    render(<Formulaire />);

    // Simulate user filling out the form
    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('phone-input'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'john.doe@example.com' } });
    fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'Hello, this is a test message.' } });

    // Add a console log to see if the form is being submitted
    console.log('Submitting the form...');

    // Simulate form submission
    fireEvent.click(screen.getByTestId('submit-button'));

    // Wait for emailjs.send to be called
    await waitFor(() => {
      expect(emailjs.send).toHaveBeenCalledTimes(1);
    }, { timeout: 2000 }); // Increase the timeout to 2 seconds

    // Verify the correct data was passed to emailjs.send
    expect(emailjs.send).toHaveBeenCalledWith(
      'service_rw438w9',
      'template_mbkv15q',
      {
        firstName: 'John',
        lastName: 'Doe',
        phone: '1234567890',
        email: 'john.doe@example.com',
        message: 'Hello, this is a test message.',
      },
      'z8AEj50JueW5yLuH2'
    );

    // Verify form reset after submission
    expect(screen.getByTestId('first-name-input').value).toBe('');
    expect(screen.getByTestId('last-name-input').value).toBe('');
    expect(screen.getByTestId('phone-input').value).toBe('');
    expect(screen.getByTestId('email-input').value).toBe('');
    expect(screen.getByTestId('message-input').value).toBe('');
  });
});
