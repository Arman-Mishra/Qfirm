import React from "react";
import styles from "./button2.module.css";

const Button2 = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button2;
