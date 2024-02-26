import React from "react";
import styles from "./intro.module.css";

const Intro = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1>
          Let's Introduce <br />
          Ourself
        </h1>
      </div>
      <div className={styles.vl}></div>
      <div>
        <h2>Criminal Lawyer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          iure mollitia sapiente perspiciatis laboriosam ut quam possimus
          veritatis ratione sit.
        </p>
      </div>
    </div>
  );
};

export default Intro;
