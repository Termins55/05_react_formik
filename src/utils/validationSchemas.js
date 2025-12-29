import * as yup from "yup";

export const LOGIN_VALIDATION_SCHEMA = yup.object({
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password is too long")
    .required("Password is required"),
});

export const SIGNUP_VALIDATION_SCHEMA = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, "Too short!")
    .max(64, "Too long!")
    .required("First name is required"),
  lastName: yup
    .string()
    .trim()
    .min(2, "Too short!")
    .max(64, "Too long!")
    .required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(32, "Password is too long")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
  isAgree: yup
    .boolean()
    .oneOf([true], "Must accept terms and conditions")
    .required("Must accept terms and conditions"),
});
