import React from "react";
import styles from "./Footer.module.sass";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.copy}>
        © {currentYear} Squadhelp Inc. All rights reserved.
      </div>

      <nav className={styles.footerNav}>
        <a href="#!">Privacy Policy</a>
        <a href="#!">Terms of Service</a>
        <a href="#!">Contact Us</a>
      </nav>
    </footer>
  );
}

export default Footer;
