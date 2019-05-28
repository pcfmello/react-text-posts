import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import API from "../../Api";
import {
  TextField,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControl,
  FormHelperText,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  input: {
    display: "none"
  },
  form: {
    width: "100%"
  },
  card: {
    marginBottom: theme.spacing(1)
  },
  cardActions: {
    padding: theme.spacing(2)
  }
}));

const validationSchema = Yup.object().shape({
  owner: Yup.string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres")
    .required("Nome é obrigatório"),
  email: Yup.string()
    .email("E-mail inválido")
    .required("E-mail é obrigatório"),
  message: Yup.string()
    .min(5, "Mensagem deve ter pelo menos 5 caracteres")
    .max(500, "Mensagem deve ter no máximo 500 caracteres")
    .required("Mensagem é obrigatória")
});

const Add = ({ history }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          color="textSecondary"
          gutterBottom
          align="center"
          variant="h6"
        >
          O que você gostaria postar?
        </Typography>

        <Formik
          {...{ validationSchema }}
          initialValues={{ owner: "", email: "", message: "" }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              setSubmitting(true);
              await API.post("/post", values);
              history.push("/");
            } catch (error) {
              error.getMessage();
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <form
              id="PostForm"
              noValidate
              autoComplete="off"
              className={classes.form}
              onSubmit={handleSubmit}
            >
              <FormControl error aria-describedby="owner-error" fullWidth>
                <TextField
                  name="owner"
                  label="Nome"
                  value={values.owner}
                  onChange={handleChange}
                  margin="normal"
                  error={errors.owner && touched.owner}
                />
                {errors.owner && touched.owner && (
                  <FormHelperText id="owner-error">
                    {errors.owner}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl error aria-describedby="email-error" fullWidth>
                <TextField
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  margin="normal"
                  error={errors.email && touched.email}
                />
                {errors.email && touched.email && (
                  <FormHelperText id="email-error">
                    {errors.email}
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl error aria-describedby="message-error" fullWidth>
                <TextField
                  name="message"
                  label="Mensagem"
                  value={values.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  rows="3"
                  error={errors.message && touched.message}
                />
                {errors.message && touched.message && (
                  <FormHelperText id="message-error">
                    {errors.message}
                  </FormHelperText>
                )}
              </FormControl>
            </form>
          )}
        </Formik>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          type="submit"
          form="PostForm"
          variant="contained"
          color="primary"
          className={classes.button}
          fullWidth
          size="large"
        >
          OK
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          fullWidth
          component={Link}
          to="/"
          size="large"
        >
          Cancelar
        </Button>
      </CardActions>
    </Card>
  );
};

Add.propTypes = {
  history: PropTypes.object.isRequired
};

export default Add;
