import styles from "./StoriesList.module.scss";
import data from "../../..//data/articles";
import { Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

import { Link } from "react-router-dom";

const StoriesList = () => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for a story"
      />
      <div className={styles.searchIcon}>
        <Search />
      </div>

      <div className={styles.stories}>
        {data.map((story) => (
          <Paper
            className={styles.story}
            elevation={3}
            component={Link}
            to={`/stories/${story.city}`}
          >
            <img className={styles.img} src={story.image} alt="" />
            <div className={styles.storyinfo}>
              <h3 className={styles.title}>{story.title}</h3>
              <div className={styles.dateTimeFlex}>
                <p>{story.readingTime} min read</p>
                <p>{story.date}</p>
              </div>
              <p className={styles.summary}>{story.summary}</p>
            </div>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default StoriesList;
