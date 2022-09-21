import React from 'react';
import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import CommonTextField from '../common/Forms/TextField/CommonTextField';
import CommonCheckbox from '../common/Forms/Checkbox/CommonCheckbox';
import SendButton from '../common/Forms/SendButton/SendButton';
import { Link } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
  remember_me: false,
}

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .required('Debes ingresar un correo electronico.')  
    .email('Debes ingresar un formato de correo electronico válido.'),
  password: Yup.string()
    .required('Debes ingresar la contraseña.'),
  remember_me: Yup.boolean(),
})

const LoginForm = () => {

  const handleSubmit = (values) => {
    console.log(values)
  }
  return (
    <Container maxWidth="sm" elevation={2}>
      <Paper elevation={24} sx={{padding:{xs:"2rem",sm:"4rem"}}}>
        <Formik
          initialValues={{...INITIAL_FORM_STATE}}
          validationSchema={FORM_VALIDATION}
          onSubmit={ handleSubmit }
        >
          <Form>
            <Grid container spacing={2} >
              <Grid item xs={12}>
                <Typography variant="h4" textAlign="center">
                  Iniciar sesión
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography textAlign="center" paragraph>
                  Ingresa tus credenciales para iniciar sesión.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <CommonTextField name="email" label="Correo electronico" />
              </Grid>
              <Grid item xs={12}>
                <CommonTextField name="password" label="Contraseña" type="password" />
              </Grid>
              <Grid item xs={12}>
                <CommonCheckbox name="remember_me" label="Recordar mi cuenta"/>
              </Grid>
              <Grid item xs={12}>
                <SendButton size="large">
                  Ingresar
                </SendButton>
              </Grid>
              <Grid item xs={12} component={Link} to="/restore-account" sx={{textDecoration:"none", color:'#1565c0',marginTop:'2rem'}}>
                <Typography textAlign="center">
                  ¿Olvidaste tu contraseña?
                </Typography>
              </Grid>
              <Grid item xs={12} component={Link} to="/register" sx={{textDecoration:"none", color:'#1565c0'}}>
                <Typography textAlign="center">
                  ¿Aún no tienes cuenta? <b>click aquí.</b>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Container>

  )
}

export default LoginForm