import {React, useRef} from "react";
import HeaderBar from "./Components/Header";
import NavbarS from "./Components/Navbar";
import FooterBar from "./Components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./Pages/Desktop/about.js";
import Resume from "./Pages/Desktop/resume.js";
import Contact from "./Pages/Desktop/contact.js";
import Portfolio from "./Pages/Desktop/portfolio.js";
import Index from "./Pages/Desktop/index";
import IndexMobile from "./Pages/Mobile/index.js";
import Gallery from "./Pages/Desktop/gallery.js";
import Aboutmobile from "./Pages/Mobile/about.js";
import Contactmobile from "./Pages/Mobile/contact.js";
import Portfoliomobile from "./Pages/Mobile/portfolio.js";
import Resumemobile from "./Pages/Mobile/resume.js";
import Gallerymobile from "./Pages/Mobile/gallery.js";
import './App.css';
import { useMediaQuery } from 'react-responsive'
import Menu from "./Components/Menu/menu.js";
import { Helmet } from "react-helmet";

function App() {
const isPhone = useMediaQuery({ query: '(max-width: 787px)' });
let container = useRef(null);
  return (
    <>

    <Router>
        <div ref = {container}>
        
        
          
            {!isPhone && 
              <>
              <HeaderBar />
              <NavbarS />
              <Routes>
                <Route path = "/" element ={<Index />} />
                <Route path="/about" element={<About/>} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume/>} />
                <Route path="/contact" element={<Contact />}/> 
                <Route path="/gallery" element={<Gallery/>}/>
                </Routes>
              </>
              } 
              {isPhone && 
              <>
              <Routes>
                <Route path = "/" element = {<IndexMobile />} />
                <Route path = "/about" element = {<Aboutmobile />} />
                <Route path="/portfolio" element={<Portfoliomobile />} /> 
                <Route path="/resume" element={<Resumemobile/>} />
                <Route path="/contact" element={<Contactmobile />}/> 
                <Route path="/gallery" element={<Gallerymobile/>}/>
                </Routes>
              </>
              }
        
        <FooterBar />
        </div>
    </Router>
    </>
  );
}

export default App;