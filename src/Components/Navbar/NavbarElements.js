
import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const Nav = styled.nav`
    background: #fff5e0;
    height: 85px;
    width: 100%;
`;
 
export const NavLink = styled(Link)`
    text-decoration: none;
    padding: 0 2em;
    color: #1e245c;
    font-size: 25px;
    font-family: arial;
    font-weight: 1000;
    cursor: pointer;
    &.active {
        color: #e13a38;
    }
`;
 
 
export const NavMenu = styled.div`
`;