import React from "react";
import styles from "./chip.module.css";
import classNames from "classnames";
const Chip = ({ selected, image, heading, text, fp }) => {
  console.log(image, fp);
  return (
    <div
      className={
        selected
          ? classNames(styles.wrapper, styles.selected)
          : classNames(styles.wrapper, styles.not_selected)
      }
      style={{ justifyContent: fp === "center" ? "center" : "flex-start" }}
    >
      <div>
        <img src={image} alt="" className={styles.img} />
      </div>
      <div className={styles.sub_wrapper}>
        <h3 className={styles.heading}>{heading}</h3>
        <p
          className={styles.sub}
          style={{ color: selected && "var(--color-primary)" }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Chip;
