import { Button } from '@mui/material'
import React from 'react'

const SecondaryButton = ({ children, ...otherProps }) => {
  const secondaryButtonConfig = {
    ...otherProps,
    variant: "outlined",
    color: "primary"
  }

  return (
    <Button {...secondaryButtonConfig}>
      {children}
    </Button>
  )
}

export default SecondaryButton