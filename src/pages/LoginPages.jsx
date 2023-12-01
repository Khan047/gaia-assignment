import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const FormContainer = styled('form')({
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  alignSelf: 'center'
});

function LoginPages() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Form submitted:', values);
    },
  });

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign={'center'}>Gaia Assignment</Typography>
      <Typography variant="h5" textAlign={'center'}>Login Page</Typography>

      <FormContainer onSubmit={formik.handleSubmit}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: 1.5 }}
        >
          Submit
        </Button>
      </FormContainer>
    </Container>
  );
}

export default LoginPages;
