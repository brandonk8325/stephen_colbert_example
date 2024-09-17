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
import Contact from "./Pages/Desktop/contact.js";
import Index from "./Pages/Desktop/index";
import IndexMobile from "./Pages/Mobile/index.js";
import Aboutmobile from "./Pages/Mobile/about.js";
import Contactmobile from "./Pages/Mobile/contact.js";
import Faq from "./Pages/Desktop/faq.js";
import Faqmobile from "./Pages/Mobile/faq.js";
import Pricing from "./Pages/Desktop/pricing.js";
import Pricingmobile from "./Pages/Mobile/pricing.js";
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
        <div ref = {container} style = {{display: "flex", flexDirection: "column"}}>
        
        
          
            {!isPhone && 
              <>
              <div >
              <HeaderBar />
              </div>
              <div>
              <NavbarS />
              </div>
              <div>
              <Routes>
                <Route path = "/" element ={<Index />} />
                <Route path="/about" element={<About/>} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faq" element={<Faq/>} />
                <Route path="/contact" element={<Contact/>} />
                </Routes>
              </div>
              </>
              } 
              {isPhone && 
              <>
              <Routes>
                <Route path = "/" element = {<IndexMobile />} />
                <Route path = "/about" element = {<Aboutmobile />} />
                <Route path="/pricing" element={<Pricingmobile />} /> 
                <Route path="/faq" element={<Faqmobile/>} />
                <Route path="/contact" element={<Contactmobile/>} />
                </Routes>
              </>
              }
        <div>
        <FooterBar />
        </div>
        </div>
    </Router>
    </>
  );
}

export default App;
