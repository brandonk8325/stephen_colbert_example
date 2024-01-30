
import React from "react";
import { Header, HeaderMenu, HeaderLink } from "./HeaderElements";
 
const HeaderBar = () => {
    return (
        <>
            <Header>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%"}}>
                        <HeaderLink to="/" activeStyle>
                                STEPHEN COLBERT
                        </HeaderLink>
                    </div>
            </Header>
        </>
    );
};
 
export default HeaderBar;