import * as Yup from "yup"


export const registerUserValidationSchema={Yup.object({
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
      .max(21, "Password must be at max 25 characters."),

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