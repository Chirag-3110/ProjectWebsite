import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
//Auth pages
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
//other pages
import Home from "./Home/pages/Home";
import Services from "./Services/pages/Services";
import ResponsiveAppBar from "./Home/components/Nav";
import Contact from './Contact/Pages/Contact'
import Feedback from "./Feedback/Pages/Feedback";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
    </Routes>
    // <div className="App">
    //   <div style={{ padding: 10 }}>
    //     <ResponsiveAppBar />
    //   </div>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="service" element={<Services />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="Feedback" element={<Feedback />} />
    //   </Routes>
    //   <Login/>
    //   <Signup/>
    // </div>
  );
}
export default App