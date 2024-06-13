import React, { useState } from 'react';

const ExamForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!subject) newErrors.subject = 'Subject is required';
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ name, email, subject });
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        {errors.subject && <span>{errors.subject}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
const styles = {
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
   
  
  };

export default ExamForm;
