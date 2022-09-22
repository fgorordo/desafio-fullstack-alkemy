import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../common/Header/MobileMenu';
import HideHeaderOnScroll from '../common/Header/HideHeaderOnScroll';
import DesktopMenu from '../common/Header/DesktopMenu';


const pages = ["Nosotros", "Contacto"]
const settings = ["Inicio", "Cuenta", "Perfil", "Cerrar sesión"]

const Header = () => {
  return (
    <HideHeaderOnScroll>
      <AppBar position="fixed" elevation={0} sx={{backgroundColor:"#fff"}}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              noWrap
              component={Link}
              to="/"
              sx={{
                fontWeight: 700,
                textDecoration: "none",
                color: "#000",
                letterSpacing: ".2rem"
              }}
            >
              myWallet
            </Typography>
            <MobileMenu />
            <DesktopMenu />
          </Toolbar>
        </Container>
      </AppBar>
    </HideHeaderOnScroll>
  );
};

export default Header;