import React from "react";
import VacationList from "../vacationList/VacationList";
import VacationHero from "../vacations hero/VacationHero";
import "./Vacations.scss";

const Vacations = () => {
  return (
    <div>
      <VacationHero />
      <VacationList />
    </div>
  );
};

export default Vacations;
