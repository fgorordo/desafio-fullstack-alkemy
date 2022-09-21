import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Nosotros", "Contacto"]
const settings = ["Inicio", "Cuenta", "Perfil", "Cerrar sesión"]

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              fontWeight: 700,
              textDecoration: "none",
              color: "inherit",
              letterSpacing: ".2rem"
            }}
          >
            myWallet
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon fontSize="2rem" />
            </IconButton>
            <Menu
              open={Boolean(anchorElUser)}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "botton",
                horizontal: "right"
              }}
            >
              {
                pages.map((page) => (
                  <MenuItem>
                    <Typography
                      textAlign="center"
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))
              }
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;