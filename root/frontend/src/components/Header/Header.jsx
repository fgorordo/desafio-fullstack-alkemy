import { Box, Button, ButtonGroup, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from '../common/Buttons/SecondaryButton/SecondaryButton';

const headerStyles = {
  grid: {
    height: 90,
    display: "flex",
    alignItems: "center",
    
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {

  }
};

const Header = () => {
  return (
    <>
      <Grid
        xs={12}
        sx={headerStyles.grid}
      >
        <Container
          sx={headerStyles.container}
        >
          <Typography
            variant='h4'
            sx={headerStyles.logo}
          >
            myWallet
          </Typography>
          <ButtonGroup>
            <SecondaryButton
              component={Link}
              to="/login"
            >
              Iniciar sesión
            </SecondaryButton>
            <PrimaryButton 
              disableElevation
              component={Link}
              to="/register"
            >
              Registrarse
            </PrimaryButton>
          </ButtonGroup>
        </Container>
      </Grid>
    </>
  );
};

export default Header;