import React from "react";
import styles from "./tile.module.css";

const Tile = ({ text, image, gs, ge }) => {
  return (
    <div
      className={styles.tile}
      style={{
        backgroundImage: `url(${image})`,
        gridColumnStart: gs,
        gridColumnEnd: ge,
      }}
    >
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Tile;
