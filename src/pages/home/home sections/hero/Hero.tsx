import { ArrowDownward } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import styles from "./Hero.module.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.maintext}>
        Explore to find inspiration for your next vacation
      </h1>
      <button
        className={styles.exploreBtn}
        onClick={() => navigate("/vacations")}
      >
        Explore
      </button>
      <span className={styles.downArrow}>
        <ArrowDownward sx={{ fontSize: 75 }} />
      </span>
    </div>
  );
};

export default Hero;
