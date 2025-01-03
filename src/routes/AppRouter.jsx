import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import HomePage from "../pages/Home";
import PhoneSec from "../pages/PhoneSec";



const AppRouter = () => {
  return (
    <>
      <Navbar />
      {/* <HomePage/>
      <PhoneSec/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        
      
      </Routes>
      
    </>
  );
};

export default AppRouter;
