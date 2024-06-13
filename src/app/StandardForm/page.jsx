  "use client";
  import React, { useState } from 'react';

  const StandardForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [administrativePosition, setAdministrativePosition] = useState('');
    const [administratorBodyId,setAdministratorBodyId] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
    
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Name:', name);
      console.log('Administrative Position:',administrativePosition);
      console.log('Administrator BodyID:',administratorBodyId);
    };

    return (
      <div style={styles.container}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={styles.input}
              required
            />
          </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}  
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            required
          /> 
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="name" style={styles.label}> 
             Name:
          </label>
           <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            style={styles.input}
            required
          /> 
        </div> 
        <div style={styles.inputGroup}>
          <label htmlFor="administrativePosition" style={styles.label}>
          Administrative Position:
          </label>
           <select 
           
            id="administrativePosition"
            value={administrativePosition}
            onChange={(e) => setAdministrativePosition(e.target.value)}
            placeholder="Enter your Administrative Position"
            style={styles.input}
            required
          >
            <option value="">Select Position</option>
            <option value="Local">Local</option>
            <option value="Province">Province</option>
            <option value="Federal">Federal</option>
            <option value="District">District</option>
            </select>
        </div>            
        <div style={styles.inputGroup}>
          <label htmlFor="administratorBodyId" style={styles.label}>
          Administrator Body Id:
          </label>
           <input
            type="number"
            id="administratorBodyId"
            value={administratorBodyId}
            onChange={(e) => setAdministratorBodyId(e.target.value)}
            placeholder="Enter your Administrator Body Id"
            style={styles.input}
            required
          /> 
        </div> 
        
        <button type="submit" style={styles.button}>
          Sign In
        </button>
      </form>
    </div>
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

export default StandardForm ;
