import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  FormControl,
  FormHelperText,
  makeStyles
} from "@material-ui/core";
import API from "../../../Api";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%"
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

const FormAdd = ({ history }) => {
  const classes = useStyles();

  return (
    <Formik
      {...{ validationSchema }}
      initialValues={{ owner: "", email: "", message: "" }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          await API.post("/post", values);
          history.push("/");
        } catch (error) {
          console.log(error.message);
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
              autoFocus
              name="owner"
              label="Nome"
              value={values.owner}
              onChange={handleChange}
              margin="normal"
              error={errors.owner && touched.owner}
            />
            {errors.owner && touched.owner && (
              <FormHelperText id="owner-error">{errors.owner}</FormHelperText>
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
              <FormHelperText id="email-error">{errors.email}</FormHelperText>
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
  );
};

FormAdd.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(FormAdd);
