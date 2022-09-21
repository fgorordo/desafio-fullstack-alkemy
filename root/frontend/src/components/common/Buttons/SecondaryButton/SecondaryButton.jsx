import { Button } from '@mui/material'
import React from 'react'

const SecondaryButton = ({ children, alt, ...otherProps }) => {
  let buttonConfig = {};

  const secondaryButtonConfig = {
    ...otherProps,
    variant: "outlined",
    color: "primary",
  };

  const secondaryButtonAltConfig = {
    ...otherProps,
    variant: "outlined",
    color: "secondary",
  };

  if (alt) {
    buttonConfig = {...secondaryButtonAltConfig}
  } else {
    buttonConfig = {...secondaryButtonConfig}
  }

  return (
    <Button {...buttonConfig}>
      {children}
    </Button>
  );
};

export default SecondaryButton;