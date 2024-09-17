
import React from "react";
import One from "../../static/Image_1.png"
import Two from "../../static/Image_2.png"
import Three from "../../static/Image_3.jpg"
import Four from "../../static/Image_4.jpg"
import Five from "../../static/Image_5.jpg"
import Six from "../../static/Image_6.jpg"

const Gallery = () => {
    return (
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff5e0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>GALLERY</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <div style = {{paddingRight: "1.5%", paddingBottom: "1.5%",  width: "50%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%", marginLeft: "auto", marginRight: "0"}}>
                       <img width = "450px" height = "300px" src = {One} alt = "1"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0",  paddingBottom: "5%"}}>
                    <img width = "450px" height = "300px" src = {Two} alt = "2"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0"}}>
                        <img width = "450px" height = "300px" src = {Three} alt = "3"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                </div>
                <div style = {{paddingLeft: "1.5%", paddingBottom: "1.5%", width: "50%", display: "grid"}}>
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                    <img width = "450px" height = "300px" src = {Four} alt = "4"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                        <img width = "450px" height = "300px" src = {Five} alt = "5"/>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginRight: "auto", marginLeft: "0"}}>
                        <img width = "450px" height = "300px" src = {Six} alt = "6"/>
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