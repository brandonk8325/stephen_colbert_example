
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
 
export const NavS = styled.nav`
    background: #fff5e0;
    width: 100%;
`;
 
export const NavLink = styled(Link)`
    text-decoration: none;
    padding: 0 3vw;
    color: #1e245c;
    font-size: 25px;
    font-family: arial;
    font-weight: 1000;
    cursor: pointer;
    &.active {
        color: #e13a38;
    }
    &:hover:not(.active){
        color: #0f122e;
    }
    &:hover{
        color: #8B0000;
    }
    
`;
 
 
export const NavMenu = styled.div`
`;