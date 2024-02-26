import React from "react";
import styles from "./choice.module.css";
import Card from "../Card/Card";

const Choice = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.h1}>Why Choose us?</h1>
      </div>
      <div className={styles.card_wrapper}>
        <Card showButton={true}>98% Success Rate</Card>
        <Card showButton={true}>100% Success Rate</Card>
        <Card showButton={true}>100% Success Rate</Card>
      </div>
    </div>
  );
};

export default Choice;
