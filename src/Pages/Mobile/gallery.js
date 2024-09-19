import React from "react";
import Menu from "../../Components/Menu/menu";
import { HeaderLink } from "../../Components/Menu/MenuElements";
import { bkgdClr, capFive, capFour, capOne, capSix, capThree, capTwo, five, four, name, one, six, three, two } from "../../variables";
const Gallerymobile = () => {
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
        <div  style = {{minHeight: "80vh", backgroundColor: "#fff5e0", padding: "0"}}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
        <div style = {{width: "80%"}}>
            <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingBottom: "15px"}}>GALLERY</p>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style = {{paddingBottom: "1.5%",  width: "100%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%"}}>
                        <img style = {{aspectRatio: "1"}} width = "100%"  src = {require("../../static/" + one)} alt = "1"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capOne}</h4>
                    </div>
                    <div style = {{ paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {require("../../static/" + two)} alt = "2"/>
                    <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capTwo}</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}}src = {require("../../static/" + three)} alt = "3"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capThree}</h4>
                    </div>
                    <div style = {{paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}}src = {require("../../static/" + four)} alt = "4"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capFour}</h4>
                    </div> 
                    <div style = {{ paddingBottom: "5%"}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {require("../../static/" + five)} alt = "5"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capFive}</h4>
                    </div>
                    <div style = {{}}>
                    <img width = "100%" style = {{aspectRatio: "1"}} src = {require("../../static/" + six)} alt = "6"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", padding: "0", margin: "0", paddingBottom: "15px"}}>{capSix}</h4>
                    </div>
                </div>
                </div>    
        </div>
        </div>
        </div>
      </div>
        </>
    );
};
 
export default Gallerymobile;