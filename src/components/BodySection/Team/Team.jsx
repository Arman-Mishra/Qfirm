import React from "react";
import styles from "./team.module.css";
import Chip from "./Chip";
import img1 from "../../../assets/team_member1.png";
import img2 from "../../../assets/team_member2.png";
import img3 from "../../../assets/team_member3.png";
import img4 from "../../../assets/team_member4.png";
import img5 from "../../../assets/team_member5.png";
import img6 from "../../../assets/team_member6.png";

const Team = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <h1 className={styles.h1}>Our Team</h1>
      </div>
      <div className={styles.chip_wrapper}>
        <Chip heading="Danial Def" text="301 Cases" image={img1} />
        <Chip heading="Sanfole" text="850 Cases" image={img2} selected={true} />
        <Chip heading="Cesforila" text="470 Cases" image={img3} fp="center" />
        <Chip heading="Colleen" text="180 Cases" image={img4} />
        <Chip heading="Haldone" text="212 Cases" image={img5} />
        <Chip heading="Nik Jeo" text="350 Cases" image={img6} fp="center" />
      </div>
    </div>
  );
};

export default Team;
