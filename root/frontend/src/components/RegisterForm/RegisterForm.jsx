import { Container } from '@mui/system'
import React from 'react'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { Button, Divider, Grid, Paper, Typography } from '@mui/material';
import CommonTextField from '../common/Forms/TextField/CommonTextField';
import CommonCheckbox from '../common/Forms/Checkbox/CommonCheckbox';
import SendButton from '../common/Forms/SendButton/SendButton';
import SecondaryButton from '../common/Buttons/SecondaryButton/SecondaryButton';
import { Link } from 'react-router-dom';

const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  rePassword: "",
  terms: false,
};

YupPassword(Yup);

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string()
    .required('Por favor ingresa tu nombre.'),
  lastName: Yup.string(),
  email: Yup.string()
    .required("Debes ingresar un correo electronico.")
    .email("Debes ingresar un formato de correo electronico válido."),
  password: Yup.string()
  .required("Debes ingresar una contrseña.")
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  "La contraseña debe contener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un numero y un simbolo."),
  rePassword: Yup.string()
    .required("Por favor repite tu contraseña.")
    .oneOf([Yup.ref("password"), null], "Las contraseñas deben coincidir."),
  terms: Yup.boolean()
    .required("Debes aceptar los terminos y condiciones.")
    .oneOf([true], "Debes aceptar los terminos y condiciones."),
});

const RegisterForm = () => {
  const handleSubmit = (values) => {
    console.log(values)
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={24} sx={{ padding: { xs: "2rem", sm: "4rem" } }}>
        <Formik
          initialValues={{...INITIAL_FORM_STATE}}
          validationSchema={FORM_VALIDATION}
          onSubmit={ handleSubmit }
        >
          <Form autoComplete='off' noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h4" textAlign="center">
                  Registrarse
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography paragraph textAlign="center">
                  Registrate en pocos clicks y comienza a disfrutar de los beneficios que trae administrar activamente tus finanzas personales. Ademas es gratis ;)
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CommonTextField
                  label="Nombre"
                  name="firstName"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CommonTextField
                  label="Apellido"
                  name="lastName"
                />
              </Grid>
              <Grid item xs={12}>
                <CommonTextField
                  label="Correo electronico"
                  name="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CommonTextField
                  label="Contraseña"
                  name="password"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CommonTextField
                  label="Repetir Contraseña"
                  name="rePassword"
                  type="password"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <CommonCheckbox name="terms" label="Acepto los terminos y condiciones" />
              </Grid>
              <Grid item xs={12}>
                <SendButton size="large">
                  Confirmar
                </SendButton>
              </Grid>
              <Grid item xs={12} component={Link} to="/login" sx={{textDecoration:"none", color:'#1565c0',marginTop:"2rem"}}>
                <Typography textAlign="center">
                  ¿Ya tienes cuenta? Ingresa haciendo <b>click aquí.</b>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default RegisterForm;