import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
import { bkgdClr, email, name, phone } from "../../variables";
const Contactmobile = () => {
    return (
        <>
        <div style = {{display: "grid", }}>
            <div style = {{display: "block", minHeight: "10vh", backgroundColor: bkgdClr}}>
                <div style = {{display: "flex", float: "right", paddingRight: "15%",  height: "0vh", paddingTop: "20px"}}>
                    <Menu />
                </div>
                <div style = {{display: "flex", float: "left", paddingLeft: "5%", justifyItems: "center", alignItems: "center", paddingTop: "30px"}}>   
                        <HeaderLink to="/" activeStyle>
                                {name}
                        </HeaderLink>
                </div>
            </div>
        <div  style = {{minHeight: "80vh", backgroundColor: bkgdClr, padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>CONTACT</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style={{textAlign: "left"}}>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>EMAIL</p>
                    <p style = {{fontSize: "20px"}}>{email}</p>
                    <p style = {{fontSize: "40px", fontWeight: "bold"}}>PHONE NUMBER</p>
                    <p style = {{fontSize: "20px"}}>{phone}</p>
                </div>
            </div>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Contactmobile;