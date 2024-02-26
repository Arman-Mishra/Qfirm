import React from "react";
import styles from "./logo.module.css";
import { ReactComponent as FirmLogo } from "../../../assets/logo_icon.svg";

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <FirmLogo />
    </div>
  );
};

export default Logo;
