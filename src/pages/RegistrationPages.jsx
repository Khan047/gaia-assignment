import React, {useState} from 'react';
import { Container, TextField, Button, Typography, CircularProgress, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FormContainer = styled('form')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'center',
});

function RegistrationPage() {
  const navigate = useNavigate(); 
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      mobile: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
      mobile: Yup.string()
      .required('Mobile number is required')
      .matches(/^[0-9]{10}$/, 'Invalid mobile number') //check for  10-digit number
    }),
    onSubmit: (values, { setSubmitting }) => {
      setIsSnackbarOpen(true);
      setTimeout(() => {
        setSubmitting(false);
        console.log('Registration Form submitted:', values);
        // Redirect to the login page on successful registration
        navigate('/login');
      }, 2000); // Simulating a 2-second delay for the submission
    },
  });

  const handleCloseSnackbar = () => {
    setIsSnackbarOpen(false);
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign={'center'}>
        Gaia Assignment
      </Typography>
      <Typography variant="h5" textAlign={'center'}>
        Registration Page
      </Typography>
      <FormContainer onSubmit={formik.handleSubmit}>
        <TextField 
          label="Name" 
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          {...formik.getFieldProps('name')}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          label="Email" 
          variant="outlined"
          fullWidth 
          sx={{ mb: 2 }}         
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email} 
          />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          {...formik.getFieldProps('password')}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          label="Mobile Number"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
          {...formik.getFieldProps('mobile')}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <Button 
          type="submit" 
          variant="contained" 
          color="primary" 
          fullWidth 
          disabled={formik.isSubmitting} 
          sx={{ padding: 1.5 }}
        >
          {formik.isSubmitting ? <CircularProgress size={24} /> : 'Register'}
        </Button>
      </FormContainer>
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message="Registration successful! You can now login."
      >
        <Alert severity="success" color="success">
          You are now registered
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default RegistrationPage;
