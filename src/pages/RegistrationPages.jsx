import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('form')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'center',
});

function RegistrationPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form submitted');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" textAlign={'center'}>
        Gaia Assignment
      </Typography>
      <Typography variant="h4" textAlign={'center'}>
        Registration Page
      </Typography>

      <FormContainer onSubmit={handleSubmit}>
        <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register
        </Button>
      </FormContainer>
    </Container>
  );
}

export default RegistrationPage;
