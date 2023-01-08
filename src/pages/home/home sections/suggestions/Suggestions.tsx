import React from "react";
import Carousel from "../../../../components/carousel/Carousel";

import styles from "./Suggestions.module.scss";

const Suggestions = () => {
  return (
    <div className={styles.container}>
      <h4 className={`${styles.subtext} ${styles.heading}`}>
        Ideas for your next trip
      </h4>
      <h1 className={`${styles.maintext} ${styles.heading}`}>
        Where are you going next?
      </h1>
      <Carousel />
    </div>
  );
};

export default Suggestions;
