import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <TextField 
          label="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth 
          margin="normal"
        />
        <TextField 
          label="Password" 
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth 
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
}

export default Signup;