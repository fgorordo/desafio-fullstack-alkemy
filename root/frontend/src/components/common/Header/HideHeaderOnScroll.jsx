import React from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { Slide } from '@mui/material';

const HideHeaderOnScroll = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideHeaderOnScroll