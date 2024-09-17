// 
import React from "react";
import { useState } from 'react';
import { NavS, NavLink, NavMenu } from "./NavbarElements";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useMediaQuery } from 'react-responsive';
import ReactDOM from "react-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";
import Menu from "../Menu/menu.js";

const NavbarS = () => {
  const isPhone = useMediaQuery({ query: '(max-width: 787px)' });

    return (
      <>
      
      <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10vh", width: "100%", backgroundColor: "#fff5e0", padding: "0px"}}>
        {!isPhone && 
          <>
          <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10vh", width: "100%", backgroundColor: "#fff5e0", padding: "0px"}}>
        <Navbar key={'md'} expand={'md'} className="mb-3">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                      <NavLink to ="/about">About</NavLink> 
                      <NavLink to ="/faq">FAQ</NavLink>
                      <NavLink to ="/pricing">Pricing</NavLink>
                      <NavLink to ="/contact">Contact</NavLink>
                  </Nav>
        </Navbar>
        </div>
        </>
        }
        
        {isPhone && 
        <>
        </>
        }
        </div>
        </>
    );
};

 
export default NavbarS;


//         // <>
//         //     <Nav>
//         //         <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "10vh", width: "100%", backgroundColor: "#fff5e0"}}>
//         //             <NavMenu>
//     //     <NavLink to="/about" activeStyle>
//     //     About
//     // </NavLink>
//     // <NavLink to="/portfolio" activeStyle>
//     //     Portfolio
//     // </NavLink>
//     // <NavLink to="/resume" activeStyle>
//     //     Resume
//     // </NavLink>
//     // <NavLink to="/contact" activeStyle>
//     //     Contact
//     // </NavLink>
//     // <NavLink to="/instagram" activeStyle>
//     //     Instagram
//     // </NavLink>
//     // <NavLink to="/form" activeStyle>
//     //     Form
//     // </NavLink>
//         //             </NavMenu>
//         //         </div>
//         //     </Nav>
//         // </>
// <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "10vh", width: "100%", backgroundColor: "#fff5e0", padding: "0px"}}>
// <nav class="navbar navbar-expand-lg navbar-light">
//   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>

//   <div class="collapse navbar-collapse" id="navbarSupportedContent">
//     <NavLink to="/about" activeStyle>
//             About
//         </NavLink>
//         <NavLink to="/portfolio" activeStyle>
//             Portfolio
//         </NavLink>
//         <NavLink to="/resume" activeStyle>
//             Resume
//         </NavLink>
//         <NavLink to="/contact" activeStyle>
//             Contact
//         </NavLink>
//         <NavLink to="/instagram" activeStyle>
//             Instagram
//         </NavLink>
//         <NavLink to="/form" activeStyle>
//             Form
//         </NavLink>
//   </div>
// </nav>
// </div> 