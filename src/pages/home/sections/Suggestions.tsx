import React from "react";
import Carousel from "../../../components/carousel/Carousel";

const Suggestions = () => {
  return (
    <>
      <div className="suggestions section">
        <h4 className="suggestion-secondary-text heading">
          Ideas for your next trip
        </h4>
        <h1 className="suggestion-primary-text heading">
          Where are you going next?
        </h1>
        <Carousel />
      </div>
    </>
  );
};

export default Suggestions;
