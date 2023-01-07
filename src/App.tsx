// import React from "react";
//import the scss file
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Stories from "./pages/travel stories/Stories";
import Vacations from "./pages/vacations/Vacations";

//import routes and route
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vacations" element={<Vacations />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </div>
  );
}

export default App;
