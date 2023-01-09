// import React from "react";
//import the scss file
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Stories from "./pages/travel stories/stories container/Stories";
import Vacations from "./pages/vacations/vacations container/Vacations";
import SingleStory from "./pages/singleStory/SingleStory";
import SingleVacation from "./pages/singleVacation/SingleVacation";

//import routes and route
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacations" element={<Vacations />} />
        <Route path="/vacations/:id" element={<SingleVacation />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/stories/:id" element={<SingleStory />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
