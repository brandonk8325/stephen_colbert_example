
import React from "react";
import { Header, HeaderLink } from "./HeaderElements";
 
const HeaderBar = () => {
    return (
        <>
            <Header>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10vh", width: "100%"}}>
                        <HeaderLink to="/" activeStyle>
                                STEPHEN COLBERT
                        </HeaderLink>
                    </div>
            </Header>
        </>
    );
};
 
export default HeaderBar;