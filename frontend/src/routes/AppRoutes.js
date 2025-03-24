import React from 'react';
import {  Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home/Index";
import AboutUs from "../pages/AboutUs/AboutUs";

function AppRouter() {
  return (
     
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUs />} />
          </Routes>
    
  );
}

export default AppRouter;

 
