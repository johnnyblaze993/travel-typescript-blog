import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.about}>
        <h5 className={styles.maintext}>About</h5>
        <p className={styles.subtext}>
          Vacation Seeker specializes in travel features user-submitted travel
          stories, offering a diverse range of experiences and destinations for
          readers to explore. From adventure tales to cultural exchange
          narratives, Vacation Seeker serves as a platform for travelers to
          share their unique perspectives and journeys with others.
        </p>
      </div>
      <div className={styles.links}>
        <h5 className={styles.maintext}>Links</h5>
        <ul>
          <li>Home</li>
          <li>Vacations</li>
          <li>Stories</li>
        </ul>
      </div>
      <div className={styles.contact}>
        <h5 className={styles.maintext}>Contact</h5>
        <ul>
          <li>Phone: 123-456-7890</li>
          <li>Email: test@gmail.com </li>
          <li>Louisville, Kentucky</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
