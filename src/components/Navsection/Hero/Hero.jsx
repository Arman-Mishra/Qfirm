import React from "react";
import styles from "./hero.module.css";
import image from "../../../assets/hero_img.png";
import msgicon from "../../../assets/message_icon.png";
import Button from "../Button/Button2";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero_text}>
        <div>
          <h1 className={styles.h1}>
            You Dont have to <br />
            <strong className={styles.strong}>Fight them Alone.</strong>
          </h1>
        </div>
        <div>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            harum possimus, esse praesentium quia perferendis inventore! Earum
            sapiente soluta sint at sed iure accusamus velit, numquam impedit,
            ex placeat et!
          </p>
        </div>

        <form className={styles.form_wrapper}>
          <div className={styles.form}>
            <span>
              <img src={msgicon} alt="msg" />
            </span>
            <input
              type="text"
              placeholder="Enter your email address"
              className={styles.input}
            />
          </div>
          <Button>Let's Talk</Button>
        </form>
      </div>
      <div>
        <img src={image} alt="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
