import React from "react";
const Index = () => {
    return ( 
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  width: "100%", backgroundColor: "#fff5e0"}}>
                <img src = {require("../static/stephen-main.jpg")} alt = "Main" width = "700vw"/>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center"}}>
                <h1>STEPHEN COLBERT</h1>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center"}}>
                <h4>Actor and Entertainer</h4>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center"}}>
                <button>
                    <p>Submit</p>
                </button>
            </div>
            </div>
        </div>
    );

};
 
export default Index;
