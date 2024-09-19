import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import { MdClose, MdMenu } from "react-icons/md";
import { useTransition, animated, config } from "react-spring";
import { NavLink } from "../Navbar/NavbarElements";
import Open from "../../static/55003.png";
import { matchPath } from 'react-router';
import { menuBtnClr, menuClr, navLinkClr } from "../../variables";

const styleToggleButtonBefore = {
    border: "none",
     margin: "0",
     padding: "0", 
     width: "40px",
     height: "40px",
     fontSize: "3rem",
     backgroundColor: "transparent",
     backfaceVisibility: "visibile"
  };

  const styleToggleButtonAfter = {
    border:"none",
    margin: "0",
     padding: "0",
     width: "40px",
     height: "40px",
     fontSize: "3rem",
     backgroundColor: "transparent",
     backfaceVisibility: "visibile"
  };

  styleToggleButtonAfter.color = menuBtnClr;
  styleToggleButtonBefore.color = menuBtnClr;

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
      backgroundColor: menuClr,
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
  let test = false;
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
              <div style = {{}}>
              <button style={styleToggleButtonBefore} onClick={toggleMenu}>
                <MdMenu ></MdMenu>
              </button>
              </div>
            </animated.div>
          ) : (
            <animated.div  style={props}>
              <div style = {{ }}>
              <button style={styleToggleButtonAfter} onClick={toggleMenu}>
                <MdClose></MdClose>
              </button>
              </div>
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
                      <NavLink to ="/about" onClick={() => !!matchPath(this.props.location.pathname, "/about") ? test = item : item = !item}>About</NavLink> 
                      <NavLink to ="/portfolio" onClick={() => !!matchPath(this.props.location.pathname, "/portfolio") ? test = item: item = !item}>Portfolio</NavLink>
                      <NavLink to ="/resume" onClick={() => !!matchPath(this.props.location.pathname, "/resume") ? test = item : item = !item}>Resume</NavLink>
                      <NavLink to ="/contact" onClick={() => !!matchPath(this.props.location.pathname, "/contact") ? test = item : item = !item}>Contact</NavLink>
                      <NavLink to ="/gallery" onClick={() => !!matchPath(this.props.location.pathname, "/gallery") ? test = item : item = !item}>Gallery</NavLink>
                </div>
              </animated.div>
            )
        )}
    </>
  );
};

export default Menu;