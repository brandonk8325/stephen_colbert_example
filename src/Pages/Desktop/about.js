import React from "react";
import { bkgdClr, AbtTxt, abtImg } from "../../variables";
const About = () => {
    return (
        <>

        <div style={{backgroundColor: bkgdClr, minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr, display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: bkgdClr}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>ABOUT</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style={{textAlign: "center", width: "500px"}}>
                    <div>
                        <img style = {{float: "right", paddingLeft: "13px", paddingTop: "30px", margin: "0", paddingRight: "15px"}} src = {require("../../static/" + abtImg)} alt = "Headshot" width = "275px"/>
                    </div>
                    <p style = {{textAlign: "left", fontSize: "20px"}}><AbtTxt/></p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};
 
export default About;