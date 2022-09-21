import { Button } from '@mui/material';
import React from 'react';

const PrimaryButton = ({ children, alt, ...otherProps }) => {
  let buttonConfig = {};

  const primaryButtonConfig = {
    ...otherProps,
    variant: "contained",
    color: "primary",
  };

  const primaryButtonAltConfig = {
    ...otherProps,
    variant: "contained",
    color: "secondary",
  };

  if (alt) {
    buttonConfig = { ...primaryButtonAltConfig }
  } else {
    buttonConfig = { ...primaryButtonConfig }
  }

  return (
    <Button {...buttonConfig}>
      {children}
    </Button>
  );
};

export default PrimaryButton;