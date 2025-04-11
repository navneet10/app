import './App.css';
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import './assets/css/sb-admin-2.css';
import AppRouter from './routes/AppRoutes';

 
function App() {
  return (
      <>
          <Router>
              <AppRouter />
          </Router>
    </>
  );
}

export default App;
