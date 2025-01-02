import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import HomePage from "../pages/Home";


const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Uncomment these when other pages are ready */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  );
};

export default AppRouter;
