import classNames from "classnames";
import { Field } from "formik";
import React from "react";

function Input(props) {
  const { name, label, classes, ...restProps } = props;
  return (
    <Field name={name}>
      {({ field, form: { errors, touched }, meta }) => {
        const inputClassesNames = classNames(classes.input, {
          [classes.valid]: !meta.error && meta.touched,
          [classes.invalid]: meta.error && meta.touched,
        });
        return (
          <label className={classes.labelContainer}>
            <span className={classes.span}>{label}</span>
            <input className={inputClassesNames} {...restProps} {...field} />
            <div className={classes.errorWrapper}>
              {meta.error && meta.touched && (
                <span className={classes.error}>{meta.error}</span>
              )}
            </div>
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
