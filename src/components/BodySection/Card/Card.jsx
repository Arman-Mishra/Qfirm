import React from "react";
import classNames from "classnames";
import styles from "./card.module.css";
import { ReactComponent as GiftIcon } from "../../../assets/gift_icon.svg";
import Button2 from "../../Navsection/Button/Button2";

const Card = ({ children, text, showButton, img, selected }) => {
  return (
    <div
      className={
        selected
          ? classNames(styles.card, styles.card_selected)
          : classNames(styles.card)
      }
    >
      <div className={styles.card_img}>
        {img ? <img src={img} alt="profile_img" /> : <GiftIcon />}
      </div>
      <div className={styles.card_element}>
        {text ? (
          <>
            <h3 className={styles.h3}>{children}</h3>
            <p className={styles.text}>{text}</p>
          </>
        ) : (
          <h3 className={styles.h3}>{children}</h3>
        )}
      </div>
      <div className={styles.card_element}>
        {showButton ? (
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
            iusto repudiandae ipsum sapiente veniam incidunt?
          </p>
        ) : (
          <p className={styles.p}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, at
            laboriosam officia hic dolor totam, nostrum ratione ducimus porro
            corporis, consectetur tenetur? Dolorum, commodi.
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
