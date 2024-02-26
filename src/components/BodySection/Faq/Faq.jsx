import React from "react";
import styles from "./faq.module.css";
import Accordion from "./Accordion";

const Faq = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.h1}>FAQ</h1>
        <p className={styles.p}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
          quod iste harum? Minus, debitis architecto?
        </p>
      </div>
      <div className={styles.accordion_wrapper}>
        <Accordion />
      </div>
    </div>
  );
};

export default Faq;
