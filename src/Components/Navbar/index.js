
import React from "react";
import Grid from '@mui/material/Grid';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                        <NavLink to="/portfolio" activeStyle>
                            Portfolio
                        </NavLink>
                        <NavLink to="/resume" activeStyle>
                            Resume
                        </NavLink>
                        <NavLink to="/contact" activeStyle>
                            Contact
                        </NavLink>
                    </NavMenu>
                </div>
            </Nav>
        </>
    );
};
 
export default Navbar;