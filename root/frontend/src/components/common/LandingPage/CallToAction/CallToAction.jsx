import { Container, Grid, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom';
import LandingPageImg from '../../../../assets/LandingPage/landing-page.svg';
import Background from '../../../../assets/LandingPage/background-cta.svg';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton';

const CallToAction = () => {
  return (
    <Paper elevation={0} sx={{background:`url(${Background}) no-repeat center center /cover`,padding:"4rem",minHeight:"100vh"}}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img src={LandingPageImg} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{display:"flex", flexFlow:"column nowrap",gap:"2rem",justifyContent:"center",alignItems:"center"}}>
            <Typography variant="h3" textAlign="center">
              Bienvenidos a <b>myWallet</b>
            </Typography>
            <Typography paragraph variant='h5' textAlign="center">
              Acompañamos tus finanzas personales, facilitando la gestión y el seguimiento.
            </Typography>
            <PrimaryButton size="large" sx={{maxWidth:{md:"250px"}}} component={Link} to="/register">
              Comenzar ahora
            </PrimaryButton>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default CallToAction