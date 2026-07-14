import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contactclass";
import Home from "./Homeclass";

export default function App() {
  return (
    <div>
      <h1>Kodnest</h1>

      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}