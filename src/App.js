import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/pages/Home";
import Card from "./Home/components/Card";
import About from "./Services/pages/Services";
import ResponsiveAppBar from "./Home/components/Nav";
function App() {
  return (
    <div className="App">
         <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<About />} />
        <Route path="Card" element={<Card />} />
      </Routes>
    </div>
  );
}
export default App