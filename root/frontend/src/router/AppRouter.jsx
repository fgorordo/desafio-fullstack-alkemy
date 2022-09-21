import React from 'react';
import { Route, Routes } from 'react-router';
import LandingPage from '../pages/LandingPage'
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import HomePage from '../pages/RegisterPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={ <LandingPage /> } />
      <Route path="/register" element={ <RegisterPage /> } />
      <Route path="/login" element={ <LoginPage /> } />
      <Route path="/dashboard" element={ <HomePage /> } />
    </Routes>
  )
}

export default AppRouter