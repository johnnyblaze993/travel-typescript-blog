import VacationHero from "../vacations/vacations hero/VacationHero";
import styles from "./SingleStory.module.scss";
import data from "../../data/articles";

//import useParam from "react-router-dom";
import { useParams } from "react-router-dom";
import { Paper } from "@mui/material";

const SingleStory = () => {
  const { id } = useParams<{ id: string }>();
  const story = data.find((story) => story.city === id);
  return (
    <>
      <VacationHero />
      <div className={styles.container}>
        <img className={styles.img} src={story?.image} alt={story?.city} />

        <h2 className={styles.city}>{story?.city}</h2>
        <h2 className={styles.title}>{story?.title}</h2>
        <h2 className={styles.maintext}>{story?.info}</h2>
      </div>
    </>
  );
};

export default SingleStory;
