import './App.css'; 
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './routes/AppRoutes';
import Footer from './components/Footer';


function App() {
  return (
      <Router>

          
          <Navbar />
          <AppRouter />
          <Footer/>
      </Router>
  );
}

export default App;
