import React from "react";
import styles from "./HomePage.module.sass";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <section className={styles.homeContainer}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>World's #1 Naming Platform</h1>
          <p className={styles.subtitle}>
            More than 40,000 businesses have used Squadhelp to find a name for
            their brand. Launch a contest or shop a name from our premium
            marketplace.
          </p>
          <Link to="/login" className={styles.ctaButton}>
            Get Started
          </Link>
        </div>

        <div className={styles.imageSection}>
          <img
            src="https://preview.redd.it/global-naming-conventions-the-order-of-surnames-given-or-v0-jom131zzmf2d1.jpeg?auto=webp&s=729409262386ea3d72143394d52b81076af0a2a5"
            alt="Creative Brainstorming"
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
