import React from 'react';
import { Container, TextField, Button } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('form')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'center'
});

function LoginPages() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log('Form submitted');
  };

  return (
    <Container maxWidth="sm">
      <FormContainer onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }} // Add margin-bottom for spacing
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }} // Add margin-bottom for spacing
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Submit
        </Button>
      </FormContainer>
    </Container>
  );
}

export default LoginPages;
