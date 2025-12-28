import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { SIGNUP_VALIDATION_SCHEMA } from "../../utils/validationSchemas";
import styles from "./SignUpForm.module.sass";
import Input from "../Input";

function SignUpForm() {
  const initialValues = {
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    isAgree: false,
  };
  const handleSubmit = (values, formikBag) => {
    console.log("Complete registration :>> ", values);
    formikBag.resetForm();
  };

  const classes = {
    error: styles.error,
    input: styles.input,
    valid: styles.valid,
    invalid: styles.invalid,
    labelContainer: styles.labelContainer,
    span: styles.span,
    errorWrapper: styles.errorWrapper,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SIGNUP_VALIDATION_SCHEMA}
    >
      <Form className={styles.form}>
        <div className={styles.row}>
          <Input
            label="Name:"
            type="text"
            name="name"
            placeholder="Yourname"
            autoFocus
            classes={classes}
          />
          <Input
            label="Last Name:"
            type="text"
            name="lastName"
            placeholder="Yourname"
            classes={classes}
          />
        </div>
        <Input
          label="Email:"
          type="email"
          name="email"
          placeholder="Youremail"
          classes={classes}
        />
        <Input
          label="Password:"
          type="password"
          name="password"
          classes={classes}
        />
        <Input
          label="Password Confirmation:"
          type="password"
          name="passwordConfirmation"
          classes={classes}
        />
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxLabel}>
            <Field
              type="checkbox"
              name="isAgree"
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxText}>
              By clicking this checkbox, your agree to our Terms of Service
            </span>
          </label>
          <div className={styles.errorWrapper}>
            <ErrorMessage
              name="isAgree"
              component="span"
              className={styles.error}
            />
          </div>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Account
        </button>
      </Form>
    </Formik>
  );
}

export default SignUpForm;
