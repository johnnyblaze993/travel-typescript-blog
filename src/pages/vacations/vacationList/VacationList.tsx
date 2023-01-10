import styles from "./VacationList.module.scss";
import vacations from "../../../data/vacation";
import { Paper } from "@mui/material";

import { Link } from "react-router-dom";

const VacationList = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for a Vacation"
      />
      <div className={styles.vacations}>
        {vacations.map((vacation) => (
          <Paper
            className={styles.vacation}
            elevation={3}
            component={Link}
            to={`/vacations/${vacation.city}`}
          >
            <img className={styles.img} src={vacation.image} alt="" />
            <div className={styles.vacationinfo}>
              <h3 className={styles.title}>{vacation.title}</h3>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default VacationList;
