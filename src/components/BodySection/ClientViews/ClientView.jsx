import React from "react";
import styles from "./clientViews.module.css";
import Card from "../../BodySection/Card/Card";
import woman from "../../../assets/women.png";
import man1 from "../../../assets/man_1.png";
import man2 from "../../../assets/man_2.png";
import { ReactComponent as Indicator } from "../../../assets/indicator.svg";

const ClientView = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top_bar}>
        <h1 className={styles.h1}>
          What says our
          <br />
          happy Clients
        </h1>
        <Indicator />
      </div>
      <div className={styles.card_wrapper}>
        <Card text="Ceo of Hunt" showButton={false} img={man1}>
          Jane Cooper
        </Card>
        <Card text="Ceo of Hunt" showButton={false} img={woman} selected={true}>
          Devon Lane
        </Card>
        <Card text="Ceo of Hunt" showButton={false} img={man2}>
          Robert Fox
        </Card>
      </div>
    </div>
  );
};

export default ClientView;
