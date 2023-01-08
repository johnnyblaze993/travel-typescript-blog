import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <input type={"text"} placeholder={"Search"} />
      {/* <h1 className={styles.maintext}>Vacation Seeker</h1> */}
      <div className={styles.navBtns}>
        <button className={styles.secondaryBtn}>Stories</button>
        <button className={styles.secondaryBtn}>Vacations</button>
        <button className={styles.primaryBtn}>Subscribe</button>
      </div>
    </div>
  );
};

export default Navbar;
