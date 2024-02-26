import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/" className={styles.link}>
        Attorneys
      </Link>
      <Link to="/" className={styles.link}>
        Practise Areas
      </Link>
      <Link to="/" className={styles.link}>
        About Us
      </Link>
    </div>
  );
};

export default Nav;
