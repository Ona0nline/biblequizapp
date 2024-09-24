import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BibleHome from "./BibleHome"; 
import GamePage from "./GamePage";  
import ScorePage from "./ScorePage";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BibleHome />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/score" element={<ScorePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
