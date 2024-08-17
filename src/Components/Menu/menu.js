import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";
import { NavLink } from "../Navbar/NavbarElements";
import Open from "../../static/55003.png";

const styleToggleButtonBefore = {
    border: "none",
     margin: "0",
     padding: "0", 
     width: "60px",
     height: "60px",
     backgroundColor: "transparent",
     backfaceVisibility: "visibile"
  };

  const styleToggleButtonAfter = {
    border:"none",
    margin: "0",
     padding: "0",
     width: "60px",
     height: "60px",
     backgroundColor: "transparent",
     backfaceVisibility: "visibile"
  };

const Menu = (props) => {       
  const [isOpen, setIsOpen] = useState(false);

  const fullscreenMenu = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "scale(0.80)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      backgroundColor: "lightgreen",
      height: "100%",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      position: "fixed"
    },
    leave: { opacity: 0, transform: "scale(0.80)" },
    config: config.gentle
  });

  const openButton = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: "scale(0)",
      position: "absolute"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)"
    },
    leave: { opacity: 0, transform: "scale(0)" },
    config: config.stiff
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div style={{ position: "relative", zIndex: 20, margin: "0", padding: "0" }}>
      {openButton((props, item ) =>
          !item ? (
            <animated.div  style={props}>
              <button style={styleToggleButtonBefore} onClick={toggleMenu}>
                <MdMenu style = {{width: "60px", height: "60px"}}></MdMenu>
              </button>
            </animated.div>
          ) : (
            <animated.div  style={props}>
              <button style={styleToggleButtonAfter} onClick={toggleMenu}>
                <MdClose style = {{width: "60px", height: "60px"}}></MdClose>
              </button>
            </animated.div>
          )
        )}
      </div>
      <div >

      </div>
      {fullscreenMenu(
          (props, item ) =>
            item && (
              <animated.div style={props}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "8vw",
                    padding: 0,
                    margin: 0,
                    listStyle: "none",
                    overflow: "hidden",
                    textAlign: "left"
                  }}
                >
                  <NavLink to ="/about">About</NavLink> 
                      <NavLink to ="/portfolio">Portfolio</NavLink>
                      <NavLink to ="/resume">Resume</NavLink>
                      <NavLink to ="/contact">Contact</NavLink>
                      <NavLink to ="/gallery">Gallery</NavLink>
                </div>
              </animated.div>
            )
        )}
    </>
  );
};

export default Menu;