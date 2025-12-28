import React from "react";
import SignUpForm from "../../components/SingUpForm";
import styles from "./SignUp.module.sass";

function SignUpPage() {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.headerContainer}>
        <h2 className={styles.title}>Create an account</h2>
        <p className={styles.subtitle}>
          We always keep your name and email address private.
        </p>
      </div>
      <SignUpForm />
    </div>
  );
}

export default SignUpPage;
