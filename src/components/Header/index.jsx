import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <span>squadhelp</span>
      </Link>

      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/login" className={styles.navLink}>
              Login
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/signup" className={styles.signupBtn}>
              Signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
