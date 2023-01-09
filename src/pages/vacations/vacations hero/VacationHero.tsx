import styles from "./VacationHero.module.scss";

const VacationHero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.maintext}>
        Inspiration for your next vacation awaits you
      </h1>
    </div>
  );
};

export default VacationHero;
