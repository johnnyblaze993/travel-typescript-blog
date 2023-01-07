import { ArrowDownward } from "@mui/icons-material";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero section">
        <h1>Explore to find inspiration for your next vacation</h1>
        <button className="exploreBtn">Explore</button>
        <span className="downArrow">
          <ArrowDownward sx={{ fontSize: 75 }} />
        </span>
      </div>
    </>
  );
};

export default Hero;
