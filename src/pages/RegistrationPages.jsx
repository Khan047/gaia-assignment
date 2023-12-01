import React, {useState} from 'react';
import { Container, TextField, Button, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const FormContainer = styled('form')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'center',
});

function RegistrationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      console.log('Registration Form submitted');
      console.log('...Redirecting to Login screen');
      navigate('/login');
    }, 2000); // Simulating a 2-second delay for the submission
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
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          disabled={isLoading} 
          sx={{ padding: 1.5 }}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Register'} 
        </Button>
      </FormContainer>
    </Container>
  );
}

export default RegistrationPage;
