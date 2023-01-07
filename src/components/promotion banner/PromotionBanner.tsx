import React from "react";
import styles from "./PromotionBanner.module.scss";

const PromotionBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <div className={styles.subtext}> Connecting travelers </div>
        <div className={styles.maintext}>
          {" "}
          Ranked #1 in the world for travel stories
        </div>
      </div>
      <div className={styles.bottomText}>
        <div className={`${styles.subtext} ${styles.bottom}`}>
          We have been featured in the New York Times, Forbes, and more for
          connecting travelers with the best travel stories.
        </div>
      </div>
    </div>
  );
};

export default PromotionBanner;
