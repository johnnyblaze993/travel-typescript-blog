import PromotionBanner from "../../components/promotion banner/PromotionBanner";
import Subscribe from "../../components/subscribe/Subscribe";
import TrendingArticle from "../../components/trending article/TrendingArticle";
import styles from "./Home.module.scss";
import Hero from "./home sections/hero/Hero";
import Suggestions from "./home sections/suggestions/Suggestions";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />

      <Suggestions />

      <div className={`${styles.articles} ${styles.section}`}>
        <PromotionBanner />
        <TrendingArticle />
      </div>

      <Subscribe />
    </div>
  );
};

export default Home;
