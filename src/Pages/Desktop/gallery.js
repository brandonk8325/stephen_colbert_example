
import React from "react";
import { bkgdClr, one, two, three, four, five, six } from "../../variables";

const Gallery = () => {
    return (
        <div style={{backgroundColor: bkgdClr, minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr, display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: bkgdClr}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>GALLERY</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style = {{paddingRight: "1.5%", paddingBottom: "1.5%",  width: "50%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%", marginLeft: "auto", marginRight: "0"}}>
                       <img width = "450px" height = "300px" src = {require("../../static/" + one)} alt = "1"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0",  paddingBottom: "5%"}}>
                    <img width = "450px" height = "300px" src = {require("../../static/" + two)} alt = "2"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0"}}>
                        <img width = "450px" height = "300px" src = {require("../../static/" + three)} alt = "3"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                </div>
                <div style = {{paddingLeft: "1.5%", paddingBottom: "1.5%", width: "50%", display: "grid"}}>
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                    <img width = "450px" height = "300px" src = {require("../../static/" + four)} alt = "4"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                        <img width = "450px" height = "300px" src = {require("../../static/" + five)} alt = "5"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginRight: "auto", marginLeft: "0"}}>
                        <img width = "450px" height = "300px" src = {require("../../static/" + six)} alt = "6"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                </div>
                </div>
                {/* <div style = {{paddingBottom: "1.5%", paddingTop: "1.5%"}}>
                    <div style = {{paddingLeft: "20%", paddingRight: "1.5%"}}>
                        <video src = {Video5} width = "28.5%" controls></video>
                    </div>
                    <div style = {{paddingLeft: "1.5%", paddingRight: "20%"}}>
                        <video src = {Video6} width = "28.5%" controls></video>
                    </div>
                </div>*/}
            </div>
            </div>

    );
};
 
export default Gallery;