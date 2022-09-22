import { Button, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'
import SecondaryButton from '../Buttons/SecondaryButton/SecondaryButton'

const DesktopMenu = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "flex" }, width: "70%", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Button>
          <Typography component={NavLink} to="/about" variant="button" sx={{ color: "#000", height: "100%", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "16px", fontWeight: 700 }}>
            Nosotros
          </Typography>
        </Button>
        <Button>
          <Typography component={NavLink} to="/contact" variant="button" sx={{ color: "#000", height: "100%", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "16px", fontWeight: 700 }}>
            Contacto
          </Typography>
        </Button>
      </Box>
      <Box sx={{ display: "flex", gap: "2rem" }}>
        <Box>
          <SecondaryButton size="large" component={Link} to="/login">Iniciar Sesión</SecondaryButton>
        </Box>
        <Box>
          <PrimaryButton size="large" component={Link} to="/register">Registrarse</PrimaryButton>
        </Box>
      </Box>
    </Box>
  )
}

export default DesktopMenu