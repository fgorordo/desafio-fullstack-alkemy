import { Box } from '@mui/material'
import React from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import LoginBackground from '../assets/LoginPage/login-background.svg'

const LoginPage = () => {
  return (
    <Box  sx={{backgroundColor:'white',height:"100vh", display:"flex",alignItems:"center",backgroundImage:`url(${LoginBackground})`,backgroundSize:"cover",}}>
      <LoginForm />
    </Box>
  )
}

export default LoginPage