import { AppBar, Box, Button, Container, Divider, IconButton, Menu, MenuItem, Slide, Toolbar, Typography, useScrollTrigger } from '@mui/material';
import React, { useState } from 'react';
import SavingsIcon from '@mui/icons-material/Savings';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { HowToReg, Login, WarningOutlined } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';

const pages = [
  {
    menu: "Nosotros",
    url: "/about",
    icon: <InfoIcon />,
  },
  {
    menu: "Contacto",
    url: "/contact",
    icon: <EmailIcon />,
  },
]

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};



const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <AppBar sx={{height:"60px",}}>
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
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
              >
                {
                  pages.map((page, index) => (
                    <MenuItem sx={{ minWidth: "300px" }} key={index}>
                      <Button size="large" startIcon={page.icon} component={NavLink} to={page.url}>
                        {page.menu}
                      </Button>
                    </MenuItem>
                  ))
                }
                <Divider />
                <MenuItem>
                  <Button variant="outlined" fullWidth startIcon={<Login />} component={Link} to="/login">
                    Iniciar sesión
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button variant="contained" fullWidth startIcon={<HowToReg />} component={Link} to="/register">
                    Registrarse
                  </Button>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
};

export default Header;