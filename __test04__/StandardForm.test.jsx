import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StandardForm from '../src/app/StandardForm/page';

describe('StandardForm', () => {
  it('renders the login form', () => {
    render(<StandardForm />);

    expect(screen.getByText('LOGIN')).toBeInTheDocument();
    expect(screen.getByLabelText('Email Address:')).toBeInTheDocument();
    expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    expect(screen.getByLabelText('Name:')).toBeInTheDocument();
    expect(screen.getByLabelText('Administrative Position:')).toBeInTheDocument();
    expect(screen.getByLabelText('Administrator Body ID:')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('submits the form with email, password,name, administrative position and administrator body iD ', () => {
    render(<StandardForm />);

    const emailInput = screen.getByLabelText('Email Address:');
    const passwordInput = screen.getByLabelText('Password:');
    const nameInput = screen.getByLabelText('Name:');
    const administrativePositionSelect = screen.getByLabelText('Administrative Position:');
    const administratorBodyIdInput = screen.getByLabelText('Administrator Body ID:');
    const submitButton = screen.getByText('Sign In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(administrativePositionSelect, { target: { value: 'Local' } });
    fireEvent.change(administratorBodyIdInput, { target: { value: '12345' } });
    fireEvent.click(submitButton);

    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
    expect(screen.getByDisplayValue('password123')).toBeInTheDocument();
    expect(screen.getByDisplayValue('John Doe')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Local')).toBeInTheDocument();
    expect(screen.getByDisplayValue('12345')).toBeInTheDocument();


  });
});
n