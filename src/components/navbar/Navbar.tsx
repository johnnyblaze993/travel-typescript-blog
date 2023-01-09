import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Home } from "@mui/icons-material";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <input type={"text"} placeholder={"Search"} />

      <div className={styles.navBtns}>
        <div className={styles.homeBtn} onClick={() => navigate("/")}>
          <Home />
        </div>
        <button
          className={styles.secondaryBtn}
          onClick={() => navigate("/stories")}
        >
          Stories
        </button>
        <button
          className={styles.secondaryBtn}
          onClick={() => navigate("/vacations")}
        >
          Vacations
        </button>
        <button className={styles.primaryBtn} onClick={() => navigate("/")}>
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Navbar;
