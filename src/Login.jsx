import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Button,
} from "@mui/material";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Must be valid email.")
            .max(50, "Email must be at max 50 characters.")
            .trim()
            .lowercase()
            .required("Email is required."),

          password: Yup.string()
            .required("Password is required.")
            .trim()
            .max(21, "Password must be at max 21 characters."),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          return (
            <form
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                width: "400px",
                gap: "1rem",
                boxshadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              }}
              onSubmit={formik.handleSubmit}
            >
              <Typography variant="h3">Login</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("firstName")}
                />

                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <Button type="summit" color="success" variant="contained">
                Login
              </Button>
              <Typography variant="h6">Need here?Register</Typography>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
