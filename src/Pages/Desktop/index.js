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
                <h1>WABASH WEBSITES</h1>
            </div>
            <div style={{ alignItems: "center", justifyContent: "center",width: "100%", backgroundColor: "#fff5e0", textAlign: "center", position: "relative", top: "-43px"}}>
                <h4>Wabash Websites develops and manages HIGH-QUALITY personalized websites for some of the LOWEST PRICES available.<br/>Starting your own website with Wabash Websites is lighting-fast and fantastically easy.<br/><br/>Fill out our Content Form! After you complete the Content Form, our Wabash Design and Development Team will immediately begin creating your website.<br/>Wabash Websites specialized in websites for actors, musicians, bands, artists, filmmakers, music producers, singers, dancers, photographers, producers, podcasters, writers, performers, and more
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
