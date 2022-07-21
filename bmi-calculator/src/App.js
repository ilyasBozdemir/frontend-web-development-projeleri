import React from 'react';
import Calculation from './Components/Calculation'
import {  Routes, Route,Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/what">BMI</Link>
          </li>
          <li>
            <Link to="/">Calculate BMI</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Calculation />} />
      </Routes>
    </div>
  );
}
export default App;