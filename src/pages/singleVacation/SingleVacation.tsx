import styles from "./SingleVacation.module.scss";
import { useParams } from "react-router-dom";
import data from "../../data/vacation";
import VacationHero from "../vacations/vacations hero/VacationHero";

const SingleVacation = () => {
  const { id } = useParams<{ id: string }>();
  const vacation = data.find((vaycay) => vaycay.city === id);
  return (
    <div>
      <VacationHero />
      <div className={styles.container}>
        <img
          className={styles.img}
          src={vacation?.image}
          alt={vacation?.city}
        />

        <h2 className={styles.city}>{vacation?.city}</h2>
        <h2 className={styles.title}>{vacation?.title}</h2>
        <h2 className={styles.title}>{vacation?.intro}</h2>
        <h2 className={styles.maintext}>{vacation?.culture}</h2>
        <h2 className={styles.maintext}>{vacation?.architecture}</h2>
        <h2 className={styles.maintext}>{vacation?.sightSee}</h2>
        <h2 className={styles.maintext}>{vacation?.food}</h2>
      </div>
    </div>
  );
};

export default SingleVacation;
