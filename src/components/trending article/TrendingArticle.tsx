import styles from "./TrendingArticle.module.scss";
import ArticleCard from "../articlecard/ArticleCard";
import { Paper } from "@mui/material";
import { useNavigate } from "react-router";

const TrendingArticle = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <Paper className={styles.window} elevation={6}>
        <h4 className={styles.subtext}>Recent updates</h4>
        <h2 className={styles.maintext}>Trending Articles</h2>
      </Paper>
      <div className={styles.cards}>
        <ArticleCard />
      </div>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.secondary}`}>
          Read{" "}
        </button>
        <button
          className={`${styles.button} ${styles.primary}`}
          onClick={() => navigate("/stories")}
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default TrendingArticle;
