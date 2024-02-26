import React from "react";
import styles from "./navbar.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

const Navbar = () => {
  return (
    <div className={styles.navbar_wrapper}>
      <Logo />
      <Nav />
      <Button>Contact Us</Button>
    </div>
  );
};

export default Navbar;
