import React from "react";
import { NavLink } from "react-router-dom";

const Index = () => {

    const over = event => {
        const el = event.target;
        el.style.backgroundColor = "#efd197"
    };
    const out = event => {
        const el = event.target;
        el.style.backgroundColor = "#f4e0b9"
    }
    return ( 

        <div style={{backgroundColor: "#fff5e0", minHeight: "70vh", position: "relative"}}>
            <div style={{margin: "0", position: "relative",left: "50%", transform: "translate(-50%, 0)"}}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center",  width: "100%", backgroundColor: "#fff5e0"}}>
                <img src = {require("../../static/stephen-main.jpg")} alt = "Main" width = "700vw"/>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-20px", paddingBottom: "5px"}}>
                <h1>STEPHEN COLBERT</h1>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-43px"}}>
                <h4>Actor and Entertainer
</h4>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-50px", display: "flex"}}>
                <NavLink to = "/contact">
                    <button type = "button"  role = "link" onMouseOver = {(event) => over(event)} onMouseOut = {(event) => out(event)} style = {{fontSize: "30px", textAlign: "center", outline: "0", alignItems: "center",  border: "none", padding: "7px 16px",minWidth: "120px", borderRadius: "4px", backgroundColor: "#f4e0b9", color: "000001", textDecoration: "none", display: "inline-flex",  width: "180px"}}> 
                            CONTACT
                    </button>
                </NavLink>
            </div>
            </div>
        </div>
    );

};
 
export default Index;
