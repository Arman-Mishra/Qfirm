import React from "react";
import styles from "./footer.module.css";
import Logo from "../Navsection/Logo/Logo";
import Nav from "../Navsection/Nav/Nav";
import { ReactComponent as Social } from "../../assets/social.svg";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_wrapper}>
        <div className={styles.logo_wrapper}>
          <Logo />
        </div>
        <div className={styles.nav_wrapper}>
          <div className={styles.nav}>
            <Nav />
            <Social />
          </div>
          <div className={styles.nav_footer}>
            <p className={styles.nav_footer_text}>
              © 2020 Acme. All right reserved.
            </p>
            <p className={styles.nav_footer_text}>Privacy Policy</p>
            <p className={styles.nav_footer_text}>Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
