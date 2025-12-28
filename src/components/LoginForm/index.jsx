import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { LOGIN_VALIDATION_SCHEMA } from "../../utils/validationSchemas";
import styles from "./LoginForm.module.sass";
import classNames from "classnames";

function LoginForm() {
  const initialValues = { email: "", password: "" };
  const handleSublit = (values, formikBag) => {
    console.log("Complete login :>> ", values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSublit}
      validationSchema={LOGIN_VALIDATION_SCHEMA}
    >
      {(formikProps) => {
        const emailClassNames = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.email && formikProps.touched.email,
          [styles.invalid]:
            formikProps.errors.email && formikProps.touched.email,
        });

        const passwordClassNames = classNames(styles.input, {
          [styles.valid]:
            !formikProps.errors.password && formikProps.touched.password,
          [styles.invalid]:
            formikProps.errors.password && formikProps.touched.password,
        });

        return (
          <Form className={styles.form}>
            <label className={styles.label}>
              <span className={styles.span}>Email:</span>
              <Field
                className={emailClassNames}
                type="email"
                name="email"
                placeholder="Youremail"
                autoFocus
              />
              <div className={styles.errorWrapper}>
                <ErrorMessage
                  name="email"
                  component="span"
                  className={styles.errorMsg}
                />
              </div>
            </label>
            <label className={styles.label}>
              <span className={styles.span}>Password:</span>
              <Field
                className={passwordClassNames}
                type="password"
                name="password"
                placeholder="Yourpassword"
              />
              <div className={styles.errorWrapper}>
                <ErrorMessage
                  name="password"
                  component="span"
                  className={styles.errorMsg}
                />
              </div>
            </label>
            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
