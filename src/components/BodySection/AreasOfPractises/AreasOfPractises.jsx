import React from "react";
import styles from "./areasOfPractises.module.css";
import Tile from "./Tile";
import item1 from "../../../assets/item1.png";
import item2 from "../../../assets/item2.png";
import item3 from "../../../assets/item3.png";
import item4 from "../../../assets/item4.png";
import item5 from "../../../assets/item5.png";
import item6 from "../../../assets/item6.png";

const AreasOfPractises = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.h1}>Area of Practices</h1>
      </div>
      <div className={styles.grid}>
        <Tile text="BUSINESS LAW" image={item1} gs={1} ge={3} />
        <Tile text="Partnership LAW" image={item2} />
        <Tile text="REAL ESTATE LAW" image={item3} />
        <Tile text="BUSINESS LAW" image={item4} gs={2} ge={4} />
        <Tile text="LANDLORD DISPUTES" image={item5} gs={1} ge={3} />
        <Tile text="ELDER ABUSE" image={item6} />
      </div>
    </div>
  );
};

export default AreasOfPractises;
