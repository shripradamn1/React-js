import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./props/About";
import Shri from "./props/Shri";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Shri/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
