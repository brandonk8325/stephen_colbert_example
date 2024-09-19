
import React from "react";
import { Header, HeaderLink } from "./HeaderElements";
import { bkgdClr, name } from "../../variables";
 
const HeaderBar = () => {
    return (
        <div style={{backgroundColor: bkgdClr}} >
            <Header>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "10vh", width: "100%"}}>
                        <HeaderLink to="/" activeStyle>
                                {name}
                        </HeaderLink>
                    </div>
            </Header>
        </div>
    );
};
 
export default HeaderBar;