
import React from "react";
import Image from "../../static/Image_1.png";
import { bkgdClr, link } from "../../variables";

const Portfolio = () => {
    return (
        <div style={{backgroundColor: bkgdClr, minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr, display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: bkgdClr}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>PORTFOLIO</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style = {{paddingRight: "1.5%", paddingBottom: "1.5%",  width: "50%", display: "grid"}}>
                    <div style = {{paddingBottom: "5%", marginLeft: "auto", marginRight: "0"}}>
                        <iframe width="450px" height = "300px" src = {link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0",  paddingBottom: "5%"}}>
                        <iframe width="450px" height = "300px" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginLeft: "auto", marginRight: "0"}}>
                        <iframe width="450px" height = "300px" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                </div>
                <div style = {{paddingLeft: "1.5%", paddingBottom: "1.5%", width: "50%", display: "grid"}}>
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                        <iframe width="450px" height = "300px" src= {link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div> 
                    <div style = {{marginRight: "auto", marginLeft: "0", paddingBottom: "5%"}}>
                        <iframe width="450px" height = "300px" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                    <div style = {{marginRight: "auto", marginLeft: "0"}}>
                        <iframe width="450px" height = "300px" src= {link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        <h4 style = {{ display: "flex",  alignItems: "center", justifyContent: "center", position: "relative", top: "-15px"}}>Caption!</h4>
                    </div>
                </div>
                </div>
            </div>
            </div>

    );
};
 
export default Portfolio;