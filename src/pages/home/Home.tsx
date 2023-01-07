import PromotionBanner from "../../components/promotion banner/PromotionBanner";
import "./Home.scss";
import Hero from "./sections/Hero";
import Suggestions from "./sections/Suggestions";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Suggestions />
      <div className="top-articles section">
        <PromotionBanner />
      </div>
      <div className="subscribe section">section 4</div>
    </div>
  );
};

export default Home;
