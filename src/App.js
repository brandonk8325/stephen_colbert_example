import {React, useRef} from "react";
import HeaderBar from "./Components/Header";
import Navbar from "./Components/Navbar";
import FooterBar from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Pages/about";
import Resume from "./Pages/resume";
import Contact from "./Pages/contact";
import Portfolio from "./Pages/portfolio";
import Index from "./Pages/index";
import './App.css';

function App() {
let container = useRef(null);
  return (
    <Router>
        <div ref = {container}>
        <HeaderBar />
        <Navbar />
        <Routes>
            <Route path = "/" element ={<Index />} />
            <Route path="/about" element={<About/>} />
            <Route
                path="/portfolio"
                element={<Portfolio />}
            />
            <Route path="/resume" element={<Resume/>} />
            <Route
                path="/contact"
                element={<Contact />}
            />
        </Routes>
        <FooterBar />
        </div>
    </Router>
  );
}

export default App;
