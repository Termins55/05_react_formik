import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./NotFound.module.sass";

function NotFoundPage() {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    },1000);
    const redirectId = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearInterval(timerId);
      clearTimeout(redirectId);
    };
  }, [navigate]);
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        <span> Oops! The page you're looking for doesn't exist.</span>
        <span>
          You will be redirected to the homepage in {seconds} seconds.
        </span>
      </p>
      <Link to="/" className={styles.homeLink}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
