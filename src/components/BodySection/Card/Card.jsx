import React from "react";
import styles from "./card.module.css";
import { ReactComponent as GiftIcon } from "../../../assets/gift_icon.svg";
import Button2 from "../../Navsection/Button/Button2";
const Card = ({ children, showButton, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        {img ? <img src={img} alt="profile_img" /> : <GiftIcon />}
      </div>
      <div className={styles.card_element}>
        <h3>{children}</h3>
      </div>
      <div className={styles.card_element}>
        {showButton ? (
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            iusto repudiandae ipsum sapiente veniam incidunt?
          </p>
        ) : (
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            obcaecati amet porro cumque maiores, cupiditate reprehenderit quas
            est placeat eius mollitia, rerum aut quaerat eligendi!
          </p>
        )}
      </div>
      <div className={styles.card_element}>
        {showButton ? <Button2>Read More</Button2> : <></>}
      </div>
    </div>
  );
};

export default Card;
