import React from "react";
 import FooterBar from "../Components/Footer";
const About = ({height}) => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", paddingTop: "20px", paddingBottom: "10px"}}>
                <div style = {{paddingRight: "20px", paddingLeft: "35%", width: "700", fontSize: "24px"}}>
                    <p>Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i></p>
                </div>
                <div style = {{paddingLeft: "20px", paddingRight: "35%"}}>
                <img src = {require("../static/stephen-headshot.jpg")} alt = "Headshot" width = "275px"/>

                </div>
            </div>
        </>
    );
};
 
export default About;