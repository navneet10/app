import './App.css'; 
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRouter from './routes/AppRoutes';


function App() {
  return (
      <Router>

          <AppRouter />
          <Navbar />
      </Router>
  );
}

export default App;
