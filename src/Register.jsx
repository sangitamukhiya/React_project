import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  FormControl,
  FormHelperText,
  TextField,
  Typography,
  Button,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const Register = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          location: "",
          gender: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Must be valid email.")
            .max(50, "Email must be at max 50 characters.")
            .trim()
            .lowercase()
            .required("Email is required."),

          firstName: Yup.string()
            .required("First Name is required.")
            .trim()
            .max(55, "First Name must be at max 55 characters.")
            .min(3, "First Name must be at least 3 characters."),

          lastName: Yup.string()
            .required("Last Name is required.")
            .trim()
            .max(55, "Last Name must be at max 55 characters.")
            .min(3, "Last Name must be at least 3 characters."),

          password: Yup.string()
            .required("Password is required.")
            .trim()
            .max(25, "Password must be at max 25 characters."),

          confirmPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Password must match"
          ),

          location: Yup.string()
            .required("Location is required.")
            .trim()
            .max(55, "Location must be at max 55 characters.")
            .min(3, "Location must be at least 3 characters."),

          gender: Yup.string()
            .oneOf(["male", "female", "preferNotToSay"])
            .required("Gender is required."),
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
              <Typography variant="h3">Register</Typography>
              <FormControl>
                <TextField label="Email" {...formik.getFieldProps("email")} />
                {formik.touched.email && formik.errors.email ? (
                  <FormHelperText error>{formik.errors.email}</FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="First name"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormHelperText error>
                    {formik.errors.firstName}
                  </FormHelperText>
                ) : null}
              </FormControl>
              <FormControl>
                <TextField
                  label="Last name"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormHelperText error>
                    {formik.errors.lastName}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Password"
                  {...formik.getFieldProps("password")}
                />

                {formik.touched.password && formik.errors.password ? (
                  <FormHelperText error>
                    {formik.errors.password}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label=" Confirm Password"
                  {...formik.getFieldProps("confirmPassword")}
                />

                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <FormHelperText error>
                    {formik.errors.confirmPassword}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl>
                <TextField
                  label="Location"
                  {...formik.getFieldProps("location")}
                />
                {formik.touched.location && formik.errors.location ? (
                  <FormHelperText error>
                    {formik.errors.location}
                  </FormHelperText>
                ) : null}
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Gender</InputLabel>
                <Select {...formik.getFieldProps("gender")} label="Gender">
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="preferNotToSay">Others</MenuItem>
                </Select>

                {formik.touched.gender && formik.errors.gender ? (
                  <FormHelperText error>{formik.errors.gender}</FormHelperText>
                ) : null}
              </FormControl>
              <Button type="summit" color="success" variant="contained">
                Register
              </Button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Register;
