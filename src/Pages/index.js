import React from "react";
const Index = () => {
    return ( 
        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  width: "100%", backgroundColor: "#fff5e0"}}>
                <img src = {require("../static/stephen-main.jpg")} alt = "Main" width = "700vw"/>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-20px"}}>
                <h1>STEPHEN COLBERT</h1>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-43px"}}>
                <h4>Actor and Entertainer</h4>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-50px"}}>
                <a href = "/contact">
                    <button type = "button"  role = "link" style = {{outline: "0", textAlign: "center", border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-block", height: "60px", width: "180px"}}> 
                        <div style={{margin: "0", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                            <p style = {{fontSize: "30px"}}>CONTACT</p>
                        </div>
                    </button>
                </a>
            </div>
            </div>
        </div>
    );

};
 
export default Index;
