import React, { useState } from 'react';
import { Container, TextField, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      history.push('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </Button>
      </form>
    </Container>
  );
}

export default Login;
