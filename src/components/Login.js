import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

// Styles for the login page
const useStyles = {
  container: styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }),
  form: styled('form')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '400px',
    alignItems: 'center', // Align items in the center
  }),
  button: styled(Button)({
    marginTop: '16px',
  }),
};

export default function Login() {
  const classes = useStyles;
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username , password } = credentials;

    if (username === 'demo' && password === 'demo') {
      navigate('/data-table'); // Navigate to data table page
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <Container className={classes.container} align= "center">
      <Typography variant="h4" gutterBottom>
        <br/><br/>
        Sign In
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          type="text"
          value={credentials.username}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ width: '50%' }} // Set the width to 50%
        /><br/>
        <TextField
          label="Password"
          name="password"
          type="password"
          value={credentials.password}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
          sx={{ width: '50%' }} // Set the width to 50%
        />
        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}<br/>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
}
