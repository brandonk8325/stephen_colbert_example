import React from "react";
const Instagram = () => {
    return ( 
        <div style={{backgroundColor: "#fff5e0", height: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <img src = {require("../static/stephen-main.jpg")} alt = "Main" width = "700px;"/>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", width: "100%", backgroundColor: "#fff5e0"}}>
                <h1>STEPHEN COLBERT IS AN ACTOR, COMEDIAN, AND <br></br> TELEVISION PERSONALITY.</h1>
            </div>
         </div>
        </div>
    );

};
 
export default Instagram;
