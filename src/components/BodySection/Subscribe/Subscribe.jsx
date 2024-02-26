import React from "react";
import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sub_wrapper}>
        <div>
          <h1 className={styles.h1}>Subscribe Our Newsletter</h1>
        </div>
        <div className={styles.tertiary_wrapper}>
          <input
            type="text"
            className={styles.input}
            style={{ borderRadius: "8px 0 0 8px" }}
            placeholder="Name:"
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Enter your Email"
          />
          <button className={styles.button}>SEND</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
