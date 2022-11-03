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
import OrderPage from "./OrderPage/OrderPage";
import Cart from "./Cart/Cart";
import Address from "./Address/Address";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/log" element={<Login />} />
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
    //     <Route path="OrderPage" element={<OrderPage />} />
    //     <Route path="Cart" element={<Cart />} />
    //     <Route path="Address" element={<Address />} />
    //   </Routes>
    // </div>
  );
}
export default App