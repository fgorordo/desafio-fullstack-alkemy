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
];

const MobileMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }}}>
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
  )
}

export default MobileMenu