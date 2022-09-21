import { Box } from '@mui/material';
import React from 'react';
import LoginBackground from '../assets/LoginPage/login-background.svg'
import RegisterForm from '../components/RegisterForm/RegisterForm';

const RegisterPage = () => {
  return (
    <Box  sx={{backgroundColor:'white',minHeight:"100vh",padding:"2rem 0", display:"flex",alignItems:"center",backgroundImage:`url(${LoginBackground})`,backgroundSize:"cover",}}>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;