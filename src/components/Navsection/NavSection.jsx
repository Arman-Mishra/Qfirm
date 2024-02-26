import React from "react";
import styles from "./navsection.module.css";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const NavSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_section}>
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default NavSection;
