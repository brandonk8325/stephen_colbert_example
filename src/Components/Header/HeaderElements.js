
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
export const Header = styled.header`
    background: #fff5e0;
    padding: 0.rem;
    //calc(100vw - / 2);
`;
 
export const HeaderLink = styled(Link)`
    textAlign: center;
    color: #1e245c;
    text-decoration: none;
    font-size: 4.4vh;
    font-weight: bold;
    padding-top: 4.4vh;
    
`;

export const HeaderMenu = styled.div`
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;