import React from "react";
import Image from "../static/pointing.png";
const Contact = () => {
    return (
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
        <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
        <div style = {{display: "grid", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0", textAlign: "center"}}>
            <p style = {{fontSize: "50px"}}>CONTACT</p>
            <p style = {{marginTop: "20px", fontSize: "40px"}}>EMAIL</p>
            <p style = {{marginTop: "-20px",fontSize: "20px"}}>email@email.com</p>
            <p style = {{fontSize: "40px"}}>PHONE NUMBER</p>
            <p style = {{marginTop: "-20px",fontSize: "20px", paddingBottom: "160px"}}>(777)-777-7777</p>
        </div>
        </div>
        </div>
    );
};
 
export default Contact;