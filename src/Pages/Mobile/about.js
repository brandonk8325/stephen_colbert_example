import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
import { abtImg, bkgdClr, name, AbtTxt } from "../../variables";
const Aboutmobile = () => {
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
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>ABOUT</p>
            <img src = {require("../../static/" + abtImg)} alt = "Main" width = "100%" style = {{aspectRatio: "2"}}/>
            <p style = {{textAlign: "left", fontSize: "30px"}}> <AbtTxt/></p>
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Aboutmobile;