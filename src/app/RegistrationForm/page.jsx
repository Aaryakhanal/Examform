"use client";
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        administrativePosition: '',
        administratorBodyId: '', 
    });
    const [errors, setError] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.email.includes('@')) {
            newErrors.email = 'Email is required and should be a valid email address';
        }
        if (formData.password.length < 6) {
            newErrors.password = ' Password should be at least 6 characters long';
        }
        if (formData.name.trim() === '') {
            newErrors.name = 'Name is required';
        }
        if (!['Local', 'Province', 'Federal', 'District'].includes(formData.administrativePosition)) {
            newErrors.administrativePosition = 'Administrative position must be one of Local, Province, Federal, District';
        }
        if (!Number.isInteger(Number(formData.administratorBodyId))) {
            newErrors.administratorBodyId = 'Administrator Body ID should be an integer';
        }

        setError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
        }
    };

    return (
        <div style={style.container}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit} style={style.form}>
                <div style={style.inputGroup}>
                    <label htmlFor="email" style={style.label}>Email Address:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        style={style.input}
                        required
                    />
                    {errors.email && <p style={style.error}>{errors.email}</p>}
                </div>
                <div style={style.inputGroup}>
                    <label htmlFor="password" style={style.label}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        style={style.input}
                        required
                    />
                    {errors.password && <p style={style.error}>{errors.password}</p>}
                </div>
                <div style={style.inputGroup}>
                    <label htmlFor="name" style={style.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        style={style.input}
                        required
                    />
                    {errors.name && <p style={style.error}>{errors.name}</p>}
                </div>
                <div style={style.inputGroup}>
                    <label htmlFor="administrativePosition" style={style.label}>Administrative Position:</label>
                    <select
                        id="administrativePosition"
                        name="administrativePosition"
                        value={formData.administrativePosition}
                        onChange={handleChange}
                        style={style.input}
                        required
                    >
                        <option value="">Select position</option>
                        <option value="Local">Local</option>
                        <option value="Province">Province</option>
                        <option value="Federal">Federal</option>
                        <option value="District">District</option>
                    </select>
                    {errors.administrativePosition && <p style={style.error}>{errors.administrativePosition}</p>}
                </div>
                <div style={style.inputGroup}>
                    <label htmlFor="administratorBodyId" style={style.label}>Administrator Body ID:</label>
                    <input
                        type="number"
                        id="administratorBodyId"
                        name="administratorBodyId"
                        value={formData.administratorBodyId}
                        onChange={handleChange}
                        placeholder="Enter your Administrator Body ID"
                        style={style.input}
                        required
                    />
                    {errors.administratorBodyId && <p style={style.error}>{errors.administratorBodyId}</p>}
                </div>
                <button type="submit" style={style.button} tested="submit-button">Register</button>
            </form>
        </div>
    );
};

const style = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    form: {
        width: '100%',
        maxWidth: '400px',
    },
    inputGroup: {
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '.5rem',
        fontWeight: 'bold',
    },
    input: {
        padding: '.5rem',
        fontSize: '1rem',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        color: 'black'
    },
    button: {
        padding: '.5rem 1rem',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: 'Blue',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
    },
    error: {
        color: 'red',
        fontSize: '0.875rem',
    },
};

export default RegistrationForm;
