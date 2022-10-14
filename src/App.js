import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/pages/Home";
import About from "./Services/pages/Services";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<About />} />
      </Routes>
    </div>
  );
}
export default App