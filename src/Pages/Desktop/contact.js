import React from "react";
import Image from "../../static/pointing.png";
import { bkgdClr, email, phone } from "../../variables";
const Contact = () => {
    return (
        <>
        <div style={{backgroundColor: bkgdClr, minHeight: "70vh"}}>
        <div style={{ alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr, display: "block"}}>
            <div style = {{display:"flex",  alignItems: "center", justifyContent: "center", width: "100%", backgroundColor: bkgdClr}}>
                <p style = {{fontSize: "50px", padding: "0", margin: "0", paddingTop: "10px"}}>CONTACT</p>
            </div>
            <div style = {{display: "flex", paddingTop: "1.5%", paddingBottom: "1.5%",   alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: bkgdClr}}>
                <div style={{textAlign: "center", width: "500px"}}>
                    <p style = {{fontSize: "40px"}}>EMAIL</p>
                    <p style = {{fontSize: "20px"}}>{email}</p>
                    <p style = {{fontSize: "40px"}}>PHONE NUMBER</p>
                    <p style = {{fontSize: "20px"}}>{phone}</p>
                </div>
            </div>
        </div>
        </div>
        </>
    );
};
 
export default Contact;