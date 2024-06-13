import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/expect-expand';
import RegistrationForm from '../src/app/RegistrationForm/';

describe('RegistrationForm', () => {
    test('renders form fields correctly', () => {
        render(<RegistrationForm />);
        
        expect(screen.getByLabelText(/Email Address:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Administrative Position:/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Administrator Body ID:/i)).toBeInTheDocument();
    });

    test('validates email correctly', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'invalidemail' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Local' } });
        fireEvent.change(screen.getByl (/Administrator Body ID:/i), { target: { value: '123' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.getByText(/Email is required and should be a valid email address/i)).toBeInTheDocument();
    });

    test('validates password correctly', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: '123' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Local' } });
        fireEvent.change(screen.getByLabelText(/Administrator Body ID:/i), { target: { value: '123' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.getByText(/Password should be at least 6 characters long/i)).toBeInTheDocument();
    });

    test('validates name correctly', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: '' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Local' } });
        fireEvent.change(screen.getByLabelText(/Administrator Body ID:/i), { target: { value: '123' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
    });

    test('validates administrative position correctly', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Invalid' } });
        fireEvent.change(screen.getByLabelText(/Administrator Body ID:/i), { target: { value: '123' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.getByText(/Administrative position must be one of Local, Province, Federal, District/i)).toBeInTheDocument();
    });

    test('validates administrator body ID correctly', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Local' } });
        fireEvent.change(screen.getByLabelText(/Administrator Body ID:/i), { target: { value: 'invalid' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.getByText(/Administrator Body ID should be an integer/i)).toBeInTheDocument();
    });

    test('submits form with valid data', () => {
        render(<RegistrationForm />);
        
        fireEvent.change(screen.getByLabelText(/Email Address:/i), { target: { value: 'test@example.com' } });
        fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password123' } });
        fireEvent.change(screen.getByLabelText(/Name:/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Administrative Position:/i), { target: { value: 'Local' } });
        fireEvent.change(screen.getByLabelText(/Administrator Body ID:/i), { target: { value: '123' } });
        
        fireEvent.click(screen.getByRole('button', { name: /Register/i }));
        
        expect(screen.queryByText(/Email is required and should be a valid email address/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Password should be at least 6 characters long/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Name is required/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Administrative position must be one of Local, Province, Federal, District/i)).not.toBeInTheDocument();
        expect(screen.queryByText(/Administrator Body ID should be an integer/i)).not.toBeInTheDocument();
    });
});



    
