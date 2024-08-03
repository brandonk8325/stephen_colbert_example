import React from "react";
const About = () => {
    return (
        <>
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
        <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: "#fff5e0"}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>ABOUT</p>
            </div>
            <div style={{textAlign: "center", width: "500px"}}>
                <div>
                    <img style = {{float: "right", paddingLeft: "13px", paddingTop: "4px", margin: "0", paddingRight: "15px"}} src = {require("../static/stephen-headshot.jpg")} alt = "Headshot" width = "275px"/>
                </div>
                <p style = {{textAlign: "left", fontSize: "20px"}}> Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i>Stephen Colbert is an American actor and comedian known for his  work on <i>The Late Show With Stephen Colbert</i>. Stephen first gained notoriety as a correspondent for the Comedy Central satirical news program <i>The Daily Show</i>, where he portrayed the conservative character he later embellished in his program <i>The Colbert Report.</i></p>
            </div>
            </div>
        </div>
        </>
    );
};
 
export default About;