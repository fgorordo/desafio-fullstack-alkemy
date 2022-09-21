import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../common/Buttons/PrimaryButton/PrimaryButton';


const Header = () => {
  return (
    <Box>
      <Container sx={{display:"flex",justifyContent:"space-between"}}>
        <Box sx={{height:"90px",display:"flex",alignItems:"center"}}>
          <Typography variant="h3" component={Link} to="/" sx={{textDecoration:"none", color:"#000"}}>
            myWallet
          </Typography>
        </Box>
        <Box sx={{display:{xs:"none",md:"block"}}}>
          Desktop Menu
        </Box>
        <Box sx={{display:{xs:"block",md:"none"}}}>
          Mobile Menu
        </Box>

      </Container>
    </Box>
  )
};

export default Header;