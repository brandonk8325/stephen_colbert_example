
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { navActvClr, navBthClr, navHvrClr, navLinkClr } from "../../variables";
 
export const NavS = styled.nav`
    width: 100%;
`;
 
export const NavLink = styled(Link)`
    text-decoration: none;
    padding: 0 3vw;
    color: ${navLinkClr};
    font-size: 25px;
    font-family: arial;
    font-weight: 1000;
    cursor: pointer;
    &.active {
        color: ${navActvClr};
    }
    &:hover:not(.active){
        color: ${navHvrClr};
    }
    &:hover{
        color: ${navBthClr};
    }
    
`;
 
 
export const NavMenu = styled.div`
`;