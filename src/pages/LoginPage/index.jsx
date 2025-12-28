import React from "react";
import LoginForm from "../../components/LoginForm";
import styles from "./Login.module.sass";

function LoginPage() {
  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.title}>Login to your account</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
