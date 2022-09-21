import { Button } from '@mui/material';
import React from 'react';

const PrimaryButton = ({children, ...otherProps}) => {
  const primaryButtonConfig = {
    ...otherProps,
    variant:'contained',
    color:'primary'
  };

  return (
    <Button {...primaryButtonConfig}>
      {children}
    </Button>
  );
};

export default PrimaryButton;